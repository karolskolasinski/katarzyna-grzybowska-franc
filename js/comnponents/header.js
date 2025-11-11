class Header extends HTMLElement {
  static observedAttributes = ["data-path"];

  constructor() {
    super();

    this.innerHTML = `
<header class="z-30 fixed top-0 right-0 left-0 bg-transparent text-gray-100 transition-all duration-700" id="kgf-header">
  <div class="w-full flex items-center justify-end p-4 md:px-8 max-w-7xl mx-auto">
    <nav class="hidden md:flex items-center gap-3 lg:gap-6 font-medium">
      <a href="#services" class="hover:text-yellow-400">Treningi</a>
      <a href="#about" class="hover:text-yellow-400">O mnie</a>
      <a href="#reviews" class="hover:text-yellow-400">Opinie</a>
      <a href="#tennis" class="hover:text-yellow-400">O tenisie stołowym</a>
      <a href="#contact" class="hover:text-yellow-400">Kontakt</a>
    </nav>

    <nav class="md:hidden">
      <div class="relative flex items-center">
        <input
          id="hamburger"
          type="checkbox"
          class="peer opacity-0 w-0 h-[26px] cursor-pointer" 
        />
        <label
          for="hamburger"
          class="absolute top-0 right-0 w-[26px] h-[26px] z-10 flex items-center justify-center cursor-pointer before:absolute before:w-full before:h-[2px] before:bg-gray-100 before:-translate-y-[8px] before:transition-all after:absolute after:w-full after:h-[2px] after:bg-gray-100 after:translate-y-[8px] after:transition-all peer-checked:rotate-45 peer-checked:before:translate-y-0 peer-checked:before:rotate-0 peer-checked:after:translate-y-0 peer-checked:after:rotate-90 transition-transform duration-300"
        >
        </label>

        <span class="w-[26px] h-[2px] bg-gray-100 peer-checked:rotate-90 transition-transform duration-300">
        </span>

        <ul class="peer-checked:right-0 fixed top-0 -right-full w-full h-full bg-black duration-[.25s] shadow-2xl p-4 flex flex-col gap-6 text-2xl font-bold">
          <li class="self-start">
            <div class="flex gap-2 items-center font-black text-[1.75rem] leading-none xs:text-[2rem] uppercase"> 
              <div><span class="text-yellow-500">W</span>iktor</div>
              <div><span class="text-yellow-500">F</span>ranc</div>
            </div>
          </li>

          <li class="pt-4">
            <a href="#services" class="hover:text-yellow-400">Treningi</a>
          </li>
          
          <li>
            <a href="#about" class="hover:text-yellow-400">O mnie</a>
          </li>
          
          <li>
            <a href="#reviews" class="hover:text-yellow-400">Opinie</a>
          </li>
          
          <li>
            <a href="#tennis" class="hover:text-yellow-400">O tenisie stołowym</a>
          </li>
          
          <li class="w-full flex justify-center">
            <hr class="w-full border-gray-700" />
          </li>
          <li class="flex flex-col items-center justify-end w-full">
            <a href="#contact" class="button w-full">Skontaktuj się ze mną</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>
`;
  }
}

customElements.define("kgf-header", Header);
