import React from "react"

const StyledModal = ({ isModal, children, closeModal, width,  opacity }: { isModal: boolean, closeModal: VoidFunction, children: React.ReactNode, width?: string, opacity?: string }) => {

    const handleClickOutside = (event: MouseEvent) => {
        const modal = document.getElementById("modal");
        if (modal && !modal.contains(event.target as Node)) {
            closeModal();
        }
    };

    React.useEffect(() => {
        if (isModal) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModal]);

    return (
        <div className={`flex justify-center items-center absolute left-0 top-0 bg-slate-900 bg-opacity-70 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden ${isModal ? "" : "hidden"}`}>
            <div id="modal" className={`rounded-md m-2 h-auto border border-stroke relative bg-white px-2.5 sm:px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:pb-1 ${width ? width : ''} ${opacity ? opacity : ''}`}>
                <span onClick={closeModal} className="absolute right-4 top-4 z-10 cursor-pointer">
                    <svg className="h-5 w-5 text-slate-900 dark:text-slate-300" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
                </span>
                {children}
            </div>
        </div>
    )
}

export default StyledModal