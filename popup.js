/**
 * Codeforces Dark Mode Extension - Popup Script
 * Copyright (c) 2026 Codeforces Dark Mode Contributors
 * Licensed under MIT License - See LICENSE file for details
 * 
 * This script controls the extension popup UI and toggle functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const statusElement = document.getElementById('status');

  chrome.storage.sync.get({ darkModeEnabled: true }, (items) => {
    updateToggle(items.darkModeEnabled);
  });

  darkModeToggle.addEventListener('click', () => {
    chrome.storage.sync.get({ darkModeEnabled: true }, (items) => {
      const newState = !items.darkModeEnabled;

      chrome.storage.sync.set({ darkModeEnabled: newState }, () => {
        console.log('Storage updated:', newState);
      });

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          console.log('Sending message to tab:', tabs[0].id);
          chrome.tabs.sendMessage(tabs[0].id, {
            action: 'toggleDarkMode',
            enabled: newState
          }, (response) => {
            if (chrome.runtime.lastError) {
              console.log('Could not send message (tab might not have content script):', chrome.runtime.lastError.message);
              updateToggle(newState);
            } else if (response && response.success) {
              console.log('Content script received message');
              updateToggle(newState);
            }
          });
        }
      });

      updateToggle(newState);
    });
  });

  function updateToggle(enabled) {
    if (enabled) {
      darkModeToggle.classList.add('active');
      statusElement.textContent = 'Active ✓';
      statusElement.style.color = '#64b5f6';
    } else {
      darkModeToggle.classList.remove('active');
      statusElement.textContent = 'Inactive ✗';
      statusElement.style.color = '#ff6b6b';
    }
  }
});
