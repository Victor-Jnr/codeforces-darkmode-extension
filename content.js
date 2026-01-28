/**
 * Codeforces Dark Mode Extension - Content Script
 * Copyright (c) 2026 Codeforces Dark Mode Contributors
 * Licensed under MIT License - See LICENSE file for details
 * 
 * This script injects dark mode CSS into Codeforces.com pages
 */

console.log('Content script loaded for Codeforces');

chrome.storage.sync.get({ darkModeEnabled: true }, (items) => {
  console.log('Initial dark mode state:', items.darkModeEnabled);
  if (items.darkModeEnabled) {
    injectDarkMode();
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received:', request);
  if (request.action === "toggleDarkMode") {
    if (request.enabled) {
      injectDarkMode();
    } else {
      removeDarkMode();
    }
    sendResponse({ success: true });
  }
});

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'sync' && changes.darkModeEnabled) {
    console.log('Storage changed, dark mode enabled:', changes.darkModeEnabled.newValue);
    if (changes.darkModeEnabled.newValue) {
      injectDarkMode();
    } else {
      removeDarkMode();
    }
  }
});

function injectDarkMode() {
  if (document.getElementById("codeforces-dark-mode-style")) {
    return;
  }

  const darkModeCSS = `
/* ============ DARK MODE FOR CODEFORCES ============ */
* {
    color: #ffffff !important;
    background-color: inherit;
}

:root {
    --border-color: rgb(70, 70, 70) !important;
    --muted-color: #bbb !important;
    --notice-color: #ccc !important;
    --highlighted-blue-color: #1a3a52 !important;
    --highlighted-green-color: #1a3a1a !important;
}

body, html {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
}

.roundbox, #body, #pageContent {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
}

/* Force all text to be white */
p, span, div, section, article, h1, h2, h3, h4, h5, h6, 
li, td, th, a, label, button, input, textarea, select,
.text, .title, .comment, .post-text {
    color: #ffffff !important;
}

/* Text changes - Links in blue */
a, .logo-href, .not-decorated {
    color: #64b5f6 !important;
}

a:visited {
    color: #9db5ff !important;
}

/* Menu items */
.menu-list li a {
    color: #ffffff !important;
}

.menu-list li.current {
    border-bottom-color: #64b5f6 !important;
}

/* Input/Search backgrounds */
.search, .search-large, .filter-box input {
    background-color: #2d2d2d !important;
    color: #ffffff !important;
    border-color: #444 !important;
}

/* Posts and highlighted boxes */
.post {
    background-color: #2d2d2d !important;
    color: #ffffff !important;
}

.highlight {
    background-color: #2d3a4a !important;
    border-color: #556b82 !important;
    color: #ffffff !important;
}

.highlight-blue {
    background-color: #1a3a52 !important;
    border-color: #2d5a8c !important;
    color: #ffffff !important;
}

/* Comments and boxes */
.comment-content, .comment-table, .test-for-popup pre {
    background-color: #2d2d2d !important;
    color: #ffffff !important;
    border-color: #444 !important;
}

/* Test example lines */
.test-example-line {
    color: #ffffff !important;
    background-color: #2d2d2d !important;
}

.test-example-line-odd {
    background-color: #252525 !important;
    color: #ffffff !important;
}

.test-example-line-even {
    background-color: #2d2d2d !important;
    color: #ffffff !important;
}

/* Problems section and filters */
.rowCount {
    color: #ffffff !important;
}

.filter {
    color: #ffffff !important;
}

.filter input {
    background-color: #2d2d2d !important;
    color: #ffffff !important;
    border-color: #555 !important;
}

/* ACE Editor styling */
.ace_content {
    background-color: #2d2d2d !important;
}

.ace_editor {
    background-color: #2d2d2d !important;
    color: #ffffff !important;
}

.ace_text-layer {
    color: #ffffff !important;
}

.ace_line {
    color: #ffffff !important;
}

.ace_active-line {
    background-color: #3d3d3d !important;
}

.ace_cursor {
    background-color: #ffffff !important;
    border-color: #ffffff !important;
}

.ace_gutter {
    background-color: #252525 !important;
    color: #888 !important;
}

.ace_gutter-cell {
    color: #888 !important;
}

.comment-table {
    border-color: #444 !important;
    color: #ffffff !important;
}

.comment-vote-direction-1 {
    background-color: #5a3333 !important;
}

.comment-vote-direction--1 {
    background-color: #334d66 !important;
}

/* Files */
.file .text {
    background-color: #2d2d2d !important;
    color: #ffffff !important;
}

/* Alerts */
div.alert-info, div.alert-warning, div.alert-error, div.alert-success, .alert {
    background-color: #2d2d2d !important;
    border-color: #444 !important;
    color: #ffffff !important;
}

/* Problems table */
.problems .accepted-problem td.act {
    background-color: #2d4a2d !important;
    color: #ffffff !important;
}

.problems .rejected-problem td.act {
    background-color: #4a2d2d !important;
    color: #ffffff !important;
}

.problems .submitted-verdict-problem td.act {
    background-color: #2d3a4a !important;
    color: #ffffff !important;
}

/* Pagination */
.pagination a, .pagination .arrow {
    color: #ffffff !important;
}

.pagination span.active {
    background-color: #2d2d2d !important;
    border-color: #556b82 !important;
    color: #ffffff !important;
}

/* Blog and text */
.blog-entry-section-name {
    color: #ffffff !important;
}

/* Footer */
#footer {
    border-top-color: #444 !important;
    color: #ffffff !important;
}

/* Spoiler */
.spoiler-content {
    background-color: #2d2d2d !important;
    border-color: #556b82 !important;
    color: #ffffff !important;
}

/* Additional elements */
table {
    background-color: #1e1e1e !important;
    color: #ffffff !important;
}

table td, table th {
    border-color: #444 !important;
    color: #ffffff !important;
    background-color: #2d2d2d !important;
}

input[type="text"], input[type="password"], textarea, select {
    background-color: #2d2d2d !important;
    color: #ffffff !important;
    border-color: #444 !important;
}

button, input[type="button"], input[type="submit"], .button {
    background-color: #2d5a8c !important;
    color: #ffffff !important;
    border-color: #2d5a8c !important;
}

button:hover, input[type="button"]:hover, input[type="submit"]:hover, .button:hover {
    background-color: #3d7aac !important;
    color: #ffffff !important;
}

.roundbox {
    background-color: #2d2d2d !important;
    color: #ffffff !important;
}

pre, code {
    background-color: #2d2d2d !important;
    color: #ffffff !important;
}

/* Override any remaining inline styles */
[style*="color: black"], [style*="color:black"] {
    color: #ffffff !important;
}

[style*="color: white"], [style*="color:white"] {
    color: #ffffff !important;
}

/* Ensure text is visible on dark background */
[style*="color: #000"], [style*="color:#000"] {
    color: #ffffff !important;
}

/* Tables and grids */
.unrated, .rated, .status-verdict, .status-problem, .status-small {
    color: #ffffff !important;
}

/* Rating and scoring */
.rating, .score, .points {
    color: #ffffff !important;
}

/* Verdict colors stay colored but ensure readability */
.verdict-accepted {
    color: #00ff00 !important;
}

.verdict-rejected {
    color: #ff6b6b !important;
}

.verdict-waiting {
    color: #ffff00 !important;
}

.verdict-challenged {
    color: #ff6b6b !important;
}

/* Sidebox and attention boxes */
.sidebox {
    background-color: #2d2d2d !important;
    color: #ffffff !important;
    border-color: #556b82 !important;
}

/* Specific styling for attention boxes */
.roundbox.highlight-blue.sidebox {
    background-color: #2d2d2d !important;
    border-color: #556b82 !important;
    color: #ffffff !important;
}

.roundbox.highlight-blue.sidebox .caption {
    background-color: #1a3a52 !important;
    color: #ffffff !important;
    border-color: #2d5a8c !important;
}

.roundbox.highlight-blue.sidebox > div {
    background-color: transparent !important;
    color: #ffffff !important;
}

.caption {
    background-color: #1a3a52 !important;
    color: #ffffff !important;
    border-color: #2d5a8c !important;
}

.caption.titled {
    background-color: #1a3a52 !important;
    color: #ffffff !important;
}

/* Ensure sidebox content inherits proper styling */
.sidebox .caption {
    background-color: #1a3a52 !important;
    color: #ffffff !important;
}

.sidebox div {
    color: #ffffff !important;
    background-color: transparent !important;
}

.sidebox > div[style] {
    background-color: transparent !important;
    color: #ffffff !important;
}
  `;

  const styleElement = document.createElement("style");
  styleElement.id = "codeforces-dark-mode-style";
  styleElement.textContent = darkModeCSS;
  document.head.appendChild(styleElement);

  // Store preference
  chrome.storage.sync.set({ darkModeEnabled: true });
}

function removeDarkMode() {
  const styleElement = document.getElementById("codeforces-dark-mode-style");
  if (styleElement) {
    styleElement.remove();
  }

  // Store preference
  chrome.storage.sync.set({ darkModeEnabled: false });
}
