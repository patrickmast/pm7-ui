// Simple markdown to HTML converter for documentation
export async function loadMarkdown(url) {
  try {
    const response = await fetch(url);
    
    // Check if response is OK
    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
      return `<p>Error loading documentation: ${response.status}</p>`;
    }
    
    // Check if response is HTML (which means we got the fallback page)
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('text/html')) {
      console.error(`Got HTML response instead of markdown for ${url}`);
      return '<p>Error: Documentation file not found. The server returned an HTML page instead of the markdown file.</p>';
    }
    
    const markdown = await response.text();
    
    // Convert markdown to HTML (basic conversion)
    let html = markdown
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      
      // Bold
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      
      // Italic
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      
      // Inline code
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      
      // Code blocks
      .replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
        return `<pre><code class="language-${lang || 'text'}">${escapeHtml(code.trim())}</code></pre>`;
      })
      
      // Lists
      .replace(/^\* (.+)$/gim, '<li>$1</li>')
      .replace(/^- (.+)$/gim, '<li>$1</li>')
      .replace(/^\d+\. (.+)$/gim, '<li>$1</li>')
      
      // Paragraphs
      .split('\n\n')
      .map(para => {
        if (para.trim() && 
            !para.startsWith('<h') && 
            !para.startsWith('<pre') && 
            !para.startsWith('<li') &&
            !para.startsWith('|')) {
          return `<p>${para.trim()}</p>`;
        }
        return para;
      })
      .join('\n')
      
      // Wrap lists
      .replace(/(<li>.*<\/li>\s*)+/g, match => `<ul>${match}</ul>`);
    
    // Convert tables
    html = convertTables(html);
    
    return html;
  } catch (error) {
    console.error('Failed to load markdown:', error);
    return '<p>Failed to load documentation</p>';
  }
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

function convertTables(text) {
  const lines = text.split('\n');
  let inTable = false;
  let tableHtml = '';
  let result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('|') && line.endsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableHtml = '<table>\n<thead>\n<tr>\n';
        
        // Header row
        const headers = line.split('|').filter(cell => cell.trim());
        headers.forEach(header => {
          tableHtml += `<th>${header.trim()}</th>\n`;
        });
        tableHtml += '</tr>\n</thead>\n<tbody>\n';
        
        // Skip separator row
        i++;
      } else {
        // Data row
        const cells = line.split('|').filter(cell => cell.trim());
        tableHtml += '<tr>\n';
        cells.forEach(cell => {
          tableHtml += `<td>${cell.trim()}</td>\n`;
        });
        tableHtml += '</tr>\n';
      }
    } else {
      if (inTable) {
        inTable = false;
        tableHtml += '</tbody>\n</table>\n';
        result.push(tableHtml);
        tableHtml = '';
      }
      result.push(line);
    }
  }
  
  if (inTable) {
    tableHtml += '</tbody>\n</table>\n';
    result.push(tableHtml);
  }
  
  return result.join('\n');
}