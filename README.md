# Codeforces Dark Mode - Chrome Extension

A simple Chrome extension that automatically applies dark mode to Codeforces.com

## Features

**Automatic Dark Mode** - Applies dark mode CSS automatically when visiting Codeforces
**Easy Toggle** - Turn dark mode on/off with a simple popup switch
**Persistent** - Your preference is saved and remembered
**Fast** - No page reload required

## Installation

### Step 1: Prepare the Extension Files
The extension is located in: `codeforces-darkmode-extension/`
Download from this page https://github.com/Victor-Jnr/codeforces-darkmode-extension/ as zip
Extract all files.

Make sure you have these files:
- `manifest.json`
- `content.js`
- `popup.html`
- `popup.js`

### Step 2: Load in Chrome

1. **Open Chrome Extensions Page**
   - Go to `chrome://extensions/` in your Chrome browser
   - OR: Menu → More Tools → Extensions

2. **Enable Developer Mode**
   - Toggle "Developer mode" in the top right corner

3. **Load Unpacked Extension**
   - Click "Load unpacked"
   - Navigate to the `codeforces-darkmode-extension` folder
   - Click "Select Folder"

4. **Done!**
   - You should see the extension in your Chrome toolbar
   - Visit https://codeforces.com to test it

## How to Use

### Automatic Mode
- Dark mode applies automatically when you visit Codeforces
- No action needed!

### Toggle On/Off
- Click the extension icon in your Chrome toolbar
- Use the toggle switch to enable/disable dark mode
- Refresh the page to see changes

### Customization
- Edit `content.js` to modify the CSS colors
- Edit `popup.html` to change the popup UI
- Reload the extension after making changes (go to `chrome://extensions/` and click the reload icon)

## Customizing Colors

To change the dark mode colors, edit the `darkModeCSS` variable in `content.js`:

```javascript
const darkModeCSS = `
/* Modify these colors */
body {
    background-color: #1e1e1e !important;  /* Background */
    color: #ffffff !important;              /* Text */
}
/* ... more styles ... */
`;
```

### Color Reference
- **Background**: `#1e1e1e` (very dark gray)
- **Text**: `#ffffff` (white)
- **Secondary bg**: `#2d2d2d` (dark gray)
- **Links**: `#64b5f6` (light blue)
- **Borders**: `#444` (medium gray)

## Troubleshooting

### Dark mode not applying?
1. Make sure the extension is enabled in `chrome://extensions/`
2. Refresh the Codeforces page
3. Check that the extension icon shows "Active ✓"

### Toggle not working?
1. Right-click the extension icon and select "Manage extension"
2. Make sure permissions are granted
3. Reload the extension (click the reload icon)

### Colors look wrong?
1. Go to `chrome://extensions/`
2. Click the reload icon on the Codeforces Dark Mode extension
3. Refresh the Codeforces page

## Uninstalling

1. Go to `chrome://extensions/`
2. Find "Codeforces Dark Mode"
3. Click the "Remove" button

## Support

- For issues, check the console: Right-click → Inspect → Console tab
- Common issues are usually fixed by reloading the extension or clearing browser cache

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for full details.

**Copyright (c) 2026 Codeforces Dark Mode Contributors**

### License Summary
- You **can** use this code freely
- You **can** modify and distribute it
- You **can** use it commercially
- You **can** make private changes
- You **must** keep the license notice
- You **must** credit the original author
- No warranty or liability

## Reuse & Attribution

If you fork, modify, or redistribute this extension:

1. **Keep the LICENSE file** - Include it in your distribution
2. **Keep copyright notices** - Don't remove the headers in source files
3. **Credit the original** - In your README or comments, mention:
   ```
   Based on Codeforces Dark Mode
   Copyright (c) 2026 Codeforces Dark Mode Contributors
   Original: https://github.com/Victor-Jnr/codeforces-darkmode-extension/
   ```
4. **Share improvements** - Consider contributing back via pull requests!

### Examples of Proper Attribution

 **Good** - Fork with clear attribution:
```
This extension is a fork of Codeforces Dark Mode by [Original Author]
Licensed under MIT - See LICENSE file
Changes: Added support for custom color themes
```

 **Good** - Derivative work with credits:
```markdown
## Credits
Based on Codeforces Dark Mode by [Original Author]
Modified and distributed under MIT License

## License
MIT License - See LICENSE file
```

## Contributing

We welcome contributions! To contribute:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

All contributions are assumed to be under the MIT License.

## Dependencies

This extension uses **zero external dependencies**:
- No npm packages
- No libraries
- Pure Chrome Extension APIs

It only uses standard Chrome APIs:
- `chrome.storage.sync` - For saving preferences
- `chrome.tabs` - For active tab detection
- `chrome.runtime` - For messaging

## Support & Issues

- **Found a bug?** [Open an issue](https://github.com/Victor-Jnr/codeforces-darkmode-extension/issues)
- **Have a suggestion?** Create a discussion or pull request
- **Contact**: ujjwalvictor2005@gmail.com

---

**Enjoy coding on Codeforces with dark mode! 🌙**
