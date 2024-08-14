function showTab(tabId) {
    // Hide all tab panes
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => pane.classList.remove('active'));
    
    // Show the clicked tab pane
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');
}

// Set default tab
document.addEventListener('DOMContentLoaded', () => {
    showTab('technical');
});
