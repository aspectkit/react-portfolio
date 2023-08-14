export default function Footer(){
    return (
        
<footer className="sticky bottom-0 bg-slate-700  dark:bg-gray-800 flex">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center justify-center">
        <a className="hover:animate-pulse" href="https://github.com/kitdhing" target="_blank" rel="noreferrer">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">Github</span>
        </a>
    </div>
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center justify-center">
        <a className="hover:animate-pulse" href="https://www.linkedin.com/in/ankit-dhingra-7a892920a/" target="_blank" rel="noreferrer">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">Linkedin</span>
        </a>
    </div>
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center justify-center">
        <a className="hover:animate-pulse" href="https://www.youtube.com/channel/UCBjbcwB65z_J54yCCA3Yjyg" target="_blank" rel="noreferrer">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">Youtube</span>
        </a>
    </div>
</footer>
    )
}