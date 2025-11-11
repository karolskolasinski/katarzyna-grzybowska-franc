class Footer extends HTMLElement {
  static observedAttributes = ["data-path"];

  constructor() {
    super();
    const path = this.getAttribute("data-path");
    const prefix = path === "index" ? "#" : "/#";

    this.innerHTML = `
<footer class="bg-black w-full text-white">
  <div class="max-w-7xl mx-auto px-4 md:px-8 py-10 md:pt-20 md:pb-0 flex flex-col items-center">
    <div class="text-center">
      <a href="/">
        <div class="flex gap-2 items-center font-black text-[1.75rem] leading-none xs:text-[2rem] uppercase">
          <div><span class="text-yellow-500">W</span>iktor</div>
          <div><span class="text-yellow-500">F</span>ranc</div>
        </div>
      </a>
      
      <small>Trenujemy, żebyś wygrywał</small>
    </div>
    
    <div class="flex gap-8 md:gap-20 pb-4 pt-10">
      <a href="https://www.facebook.com/Butterfly.Polska">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="min-w-8 h-8 fill-white hover:fill-[#0866ff] transition-colors duration-200">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
      </a>
        
      <a href="https://www.instagram.com/butterflyttofficial/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="min-w-8 h-8 fill-white hover:fill-[#E1306C] transition-colors duration-200">
          <path d="M12.004 5.838a6.157 6.157 0 0 0-6.158 6.158 6.157 6.157 0 0 0 6.158 6.158 6.157 6.157 0 0 0 6.158-6.158 6.157 6.157 0 0 0-6.158-6.158zm0 10.155a3.996 3.996 0 1 1 3.997-3.997 3.995 3.995 0 0 1-3.997 3.997z"/>
          <path d="M16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941C-.283 4.325.012 7.435.012 11.996c0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"/>
          <circle cx="18.406" cy="5.595" r="1.439"/>
        </svg>
      </a>
    
      <a href="https://x.com/ButterflyEuropa">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="min-w-8 h-8 fill-white hover:fill-gray-500 transition-colors duration-200">
          <path d="M389.2 48H463l-163 186.2L480 464H343.6L233.8 323.5 109.5 464H36.5l173.7-198.3L32 48h140.2l100.2 128.6L389.2 48zM364.4 421.1h37.7L153.4 90.6h-40L364.4 421.1z"/>
        </svg>
      </a>
    
      <a href="https://www.youtube.com/user/TamasuBUTTERFLY">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="min-w-8 h-8 fill-white hover:fill-[#FF0000] transition-colors duration-200">
          <path d="M549.7 124.1a68.8 68.8 0 0 0-48.6-48.8C458.3 64 288 64 288 64s-170.3 0-213.1 11.3a68.8 68.8 0 0 0-48.6 48.8C16 166.9 16 256 16 256s0 89.1 10.3 131.9a68.8 68.8 0 0 0 48.6 48.8C117.7 448 288 448 288 448s170.3 0 213.1-11.3a68.8 68.8 0 0 0 48.6-48.8C560 345.1 560 256 560 256s0-89.1-10.3-131.9zM232 334V178l142 78z"/>
        </svg>
      </a>
    </div>

    <small class="py-4 text-center block">
      © 2025 - Wszelkie prawa zastrzeżone.
    </small>
  </div>
</footer>
`;
  }
}

customElements.define("wf-footer", Footer);
