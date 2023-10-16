var tabLinks = document.getElementsByClassName('tab-link');
var tabItem = document.getElementsByClassName('tab-items');

Array.from(tabLinks).forEach((element, index) => {
    element.addEventListener('click', function(){
        if(!tabItem[index].classList.contains('active-tab')){
            // toggling active tab class section wise
            var activeTab = document.querySelector('.active-tab');
            activeTab.classList.remove('active-tab');
            tabItem[index].classList.add('active-tab');

            // toggling active class in ul
            var active = document.querySelector('.active');
            active.classList.remove('active');
            tabLinks[index].classList.add('active');
        }
    })
});
