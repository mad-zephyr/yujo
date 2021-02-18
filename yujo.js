 
window.addEventListener('DOMContentLoaded', function(){
    

    const wrapper  = document.querySelector('.wrapper');
    const wrapperTn = wrapper.querySelector('.tn-atom');
    const body = document.querySelector('body');
    const mainScreen = document.querySelector('#rec282152298');
    const carrier = mainScreen.querySelector('.t396__carrier');
    const filter = mainScreen.querySelector('.t396__filter');
    
    carrier.remove();
    filter.remove();
    wrapperTn.remove();
    
    const banner3  = document.querySelector('#rec282435942');
    const banner2  = document.querySelector('#rec282423206');
    const banner1  = document.querySelector('#rec282423000');

    
    bannerWidth(banner1);
    bannerWidth(banner2);
    bannerWidth(banner3);
    
    function bannerWidth(banner){
        banner.style.width = `${window.innerWidth}px`;
    }
    
    const slider = document.createElement('div');
    slider.classList.add('slider'); 
    
    wrapper.append(slider);
    
    const control = document.createElement('div');
    control.classList.add('controls');
    body.append(control);
    control.innerHTML = `
        <div class="active_line"></div>
            <div class="controls_block">
                <div class="controls_block_number ">01</div>
                <div class="controls_block_line"></div>
            </div>
            <div class="controls_block">
                <div class="controls_block_number">02</div>
                <div class="controls_block_line "></div>
            </div>
            <div class="controls_block">
                <div class="controls_block_number  ">03</div>
                <div class="controls_block_line"></div>
        </div>
    
    `;
    
    function setPositionControl(){
        if(window.innerWidth > 1190){
               if(window.innerWidth <= 1200){  
                    let position = 1200; 
                    control.style.right = `${position - 30}px`;
               } else {
                    let width = window.innerWidth; 
                    let position = (width - 1200)/2; 
                    control.style.right = `${position - 30}px`;
               }
        }
    }
    
    window.addEventListener('resize', setPositionControl);
    setPositionControl();
    
    const number = document.querySelectorAll('.controls_block_number');
    const line = document.querySelectorAll('.controls_block_line'); 
    const activeLine = document.querySelector('.active_line');
   
    slider.append(banner3);
    slider.append(banner1);
    slider.append(banner2);

    
    number.forEach((elem, i) =>{
    
        switch (i){
            case 0: 
                break;
            case 1:
                elem.classList.add('controls_block_number_second');
                break;
            case 2:
                elem.classList.add('controls_block_number_third');
                break;
        } 
    });
    
    
    line.forEach((elem, i) =>{ 
        switch (i){
            case 0: 
                break;
            case 1:
                elem.classList.add('controls_block_line_second');
                break;
            case 2:
                elem.classList.add('controls_block_line_third');
                break;
        } 
    });
    
    control.addEventListener('click', (e)=>{
        for(key in number){
    
            if(e.target === number[+key]){
                console.log(e.target);
                console.log(+key); 
                setNumber(key);
            } 
        }
    });
 

    function setNumber(key){
    
        number.forEach(elem =>{ 
            elem.classList.remove('controls_block_number_second');
            elem.classList.remove('controls_block_number_third'); 
        });
    
        line.forEach(elem =>{
            elem.classList.remove('controls_block_line_second');
            elem.classList.remove('controls_block_line_third');
        });
    
        if(+key === 0){  
            number[1].classList.add('controls_block_number_second'); 
            number[2].classList.add('controls_block_number_third');
    
            line[1].classList.add('controls_block_line_second');
            line[2].classList.add('controls_block_line_third');
    
            setLinePosition(+key);
            moveSliderLeft(+key);
    
        } else if(+key === 1){  
            number[0].classList.add('controls_block_number_second');  
            number[2].classList.add('controls_block_number_third');
    
            line[0].classList.add('controls_block_line_second');
            line[2].classList.add('controls_block_line_third');
            setLinePosition(+key);
            
            moveSliderLeft(+key);
    
        } else if (+key === 2){ 
            number[0].classList.add('controls_block_number_third');  
            number[1].classList.add('controls_block_number_second');
    
            line[0].classList.add('controls_block_line_third');
            line[1].classList.add('controls_block_line_second');
            setLinePosition(+key);
            
            moveSliderLeft(+key);
        }
    }


    function setLinePosition(index){
        let position = index * 74;
        activeLine.style.top = `${position}px`;
    }
    
    
    function moveSliderLeft(index){
        let position = index * window.innerWidth;
        slider.style.transform = `translateX(-${position}px)`;
    }
    
    function sliderWidth(index){
        let width = index * 100;
        slider.style.width = `${width}%`;
    }
});
 