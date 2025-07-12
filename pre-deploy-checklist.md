# PM7-UI Pre-Deployment Checklist

This checklist contains manual verification steps that should be performed before each deployment. While automated tests cover most scenarios, these manual checks ensure quality and catch issues that are difficult to automate.

## ✅ Visual Inspection

### Component Appearance
- [ ] All components look correct in **light mode**
- [ ] All components look correct in **dark mode**
- [ ] No visual glitches or layout issues
- [ ] Proper spacing and alignment
- [ ] Icons display correctly
- [ ] Animations are smooth (no jank)

### Typography
- [ ] Fonts load correctly
- [ ] Text is readable in all color modes
- [ ] No text overflow or truncation issues
- [ ] Proper font weights and sizes

### Responsive Design
- [ ] Test on actual mobile device (not just browser emulation)
- [ ] Test on tablet (iPad or similar)
- [ ] Check landscape and portrait orientations
- [ ] Verify touch interactions work properly
- [ ] Check that modals/dialogs are usable on small screens

## ✅ Browser Compatibility

Test on latest versions of:
- [ ] Chrome (Windows/Mac)
- [ ] Firefox (Windows/Mac)
- [ ] Safari (Mac/iOS)
- [ ] Edge (Windows)
- [ ] Chrome on Android
- [ ] Safari on iOS

## ✅ Functionality Tests

### Interactive Components
- [ ] Dropdowns open in correct position (not cut off)
- [ ] Tooltips appear on hover and don't get stuck
- [ ] Modals prevent background scrolling
- [ ] Form inputs accept text correctly
- [ ] Copy/paste works in inputs
- [ ] File uploads work (if applicable)

### Navigation
- [ ] All links work correctly
- [ ] Back/forward browser buttons work
- [ ] Deep linking works (direct URLs)
- [ ] Anchor links scroll smoothly

### Edge Cases
- [ ] Long text content doesn't break layouts
- [ ] Empty states display correctly
- [ ] Error states are handled gracefully
- [ ] Loading states show properly
- [ ] Works with browser zoom (75%, 100%, 125%, 150%)

## ✅ Performance

- [ ] Initial page load feels fast (< 2 seconds)
- [ ] No noticeable lag when interacting with components
- [ ] Smooth scrolling performance
- [ ] Check Network tab for failed requests
- [ ] Verify no excessive API calls

## ✅ Accessibility

### Screen Reader Testing
- [ ] Test with NVDA (Windows) or VoiceOver (Mac)
- [ ] All interactive elements are announced correctly
- [ ] Form labels are associated properly
- [ ] Error messages are announced

### Keyboard Navigation
- [ ] Can navigate entire site without mouse
- [ ] Focus indicators are visible
- [ ] Skip links work (if implemented)
- [ ] Escape key closes modals/dropdowns
- [ ] Tab order is logical

### Visual Accessibility
- [ ] Test with Windows High Contrast mode
- [ ] Verify color contrast meets WCAG AA standards
- [ ] UI is usable without color (color blind users)

## ✅ Documentation

- [ ] README is up to date
- [ ] Component documentation matches implementation
- [ ] Code examples work when copy/pasted
- [ ] API documentation is accurate
- [ ] Migration guide updated (if breaking changes)
- [ ] CHANGELOG updated

## ✅ Code Quality

- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] No console.log statements in production code
- [ ] No commented-out code blocks
- [ ] No TODO comments that should be resolved

## ✅ Build & Deployment

- [ ] Build completes without warnings
- [ ] Bundle size is reasonable (check for regressions)
- [ ] Source maps are generated correctly
- [ ] CDN URLs work (if applicable)
- [ ] NPM package publishes correctly (dry run first)

## ✅ Security

- [ ] No exposed API keys or secrets
- [ ] Content Security Policy headers are correct
- [ ] No XSS vulnerabilities in user inputs
- [ ] Dependencies are up to date (no critical vulnerabilities)

## ✅ Integration Testing

- [ ] Test in a real project (React app)
- [ ] Test in a Vue.js project
- [ ] Test in vanilla JavaScript project
- [ ] Verify TypeScript types work correctly
- [ ] Test both CDN and NPM installation methods

## ✅ Final Checks

- [ ] Version number bumped appropriately
- [ ] Git tag created for release
- [ ] All tests pass locally
- [ ] All tests pass in CI
- [ ] No uncommitted changes
- [ ] PR approved by reviewer (if applicable)

## 🚀 Deployment Steps

1. Run automated tests: `npm run test:pre-deploy`
2. Complete this manual checklist
3. Build packages: `npm run build`
4. Publish to NPM: `npm publish --dry-run` then `npm publish`
5. Deploy documentation: `npm run deploy:docs`
6. Create GitHub release with changelog
7. Announce in Discord/Slack (if applicable)

## 🔥 Rollback Plan

If issues are discovered post-deployment:

1. Revert to previous NPM version: `npm deprecate @pm7/core@[bad-version] "Critical bug"`
2. Revert documentation if needed
3. Communicate issue to users
4. Fix issue and re-deploy with patch version

---

**Remember**: It's better to delay a release than to ship broken code. Take your time with this checklist!