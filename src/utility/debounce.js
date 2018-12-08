export default function debounce(fn, waitTime){
    let timer

    return function(){
        let self = this, args = arguments

        let later = function(){
            timer = null
            fn.apply(self,args)
        }

        clearTimeout(timer)
        timer = setTimeout(later,waitTime)
    }

}