
const WhatsAppBtn = () => {
  return (
    <div>
         <a
                href="https://wa.me/919582154304"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed z-50 bottom-7 right-7 shadow-xl animate-bounce"
                aria-label="Chat on WhatsApp"
              >
       
               <img src="/whatsapp.svg" alt="Logo" className="w-14 h-14" loading="lazy" />

              </a>
    </div>
  )
}

export default WhatsAppBtn