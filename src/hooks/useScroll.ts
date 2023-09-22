'use client'

const useScroll = () => {
    
    const handler = (section: string) => {
        const target = document.getElementById(section);

        if(target) {
            const offset = target.getBoundingClientRect().top + window.scrollY - 256;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            })
        }
    }

    return handler;
}

export default useScroll;