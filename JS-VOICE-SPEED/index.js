    const msg = new SpeechSynthesisUtterance()
    let voice = [];
    const voicesDropdown = document.querySelector('[name = "voice"]')
    const options =  document.querySelectorAll('[type = "range"], [name = "text"]')
    const speakButton = document.querySelector('#speak')
    const stopButton = document.querySelector('#stop')
    msg.text = document.querySelector('[name = "text"]').value
    console.log(msg)
    console.log(123)

    function toggle(startOver = true){
        speechSynthesis.cancel()
        if(startOver){
            speechSynthesis.speak(msg)
        }
        
    }
    
   
    speechSynthesis.addEventListener('voiceschanged', populateVoices)

    speakButton.addEventListener('click', toggle)
    //ES6
    // stopButton.addEventListener('click', () => toggle(false))
    //ES5
    stopButton.addEventListener('click', function(){
        toggle(false)
    })

    function populateVoices() {
        voices = this.getVoices() // 拿到多种声音并存放到voices数组
        voicesDropdown.innerHTML = voices
        .filter(//数组过滤，遍历数组中每一个值
            voice => voice.lang.includes('en') //只需要名字中含有'en'
        )
        .map(voice => `<option value ="${voice.name}">${voice.name}(${voice.lang})</option>`)
        .join('')
    }
        
    function setVoice(){
        msg.voice = voices.find(voice => voice.name === this.value)
        toggle()
    }

    function setOption(){
        console.log(this.value)
        msg[this.name] = this.value
        toggle()
    }


    voicesDropdown.addEventListener('change', setVoice)

    // options.forEach(Option => options.addEventListener('change', setOption))
    options.forEach(option => option.addEventListener('change', setOption))
