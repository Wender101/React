import './assets/Sass/App.css'

export default function App() {

  return (
    <>
      <div id='container_relogio'>
        <div id='borda_relogio'>
          <div id='linha_12' className='linhas'></div>
          <div id='linha_3' className='linhas'></div>
          <div id='linha_6' className='linhas'></div>
          <div id='linha_9' className='linhas'></div>

          <div id='container_ponteiros'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="45" viewBox="0 0 60 45" fill="none" className='ponteiro' id='ponteiro_hora'>
              <path d="M57.9998 42.9999L1.99997 1.99976" stroke="#8E98A2" stroke-width="3" stroke-linecap="round"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="45" viewBox="0 0 60 45" fill="none" className='ponteiro' id='ponteiro_minutos'>
              <path d="M57.9998 42.9999L1.99997 1.99976" stroke="#8E98A2" stroke-width="3" stroke-linecap="round"/>
            </svg>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="96" viewBox="0 0 71 96" fill="none" className='ponteiro' id='ponteiro_segundos'>
              <g filter="url(#filter0_d_105_2)">
                <path d="M18.4998 71.4999L11 86.9997" stroke="url(#paint0_linear_105_2)" stroke-width="4" stroke-linecap="round"/>
              </g>
              <g filter="url(#filter1_d_105_2)">
                <circle cx="23.4999" cy="60.9999" r="3" fill="#FD382D"/>
              </g>
              <g filter="url(#filter2_d_105_2)">
                <path d="M52.5 2.00002L18.4999 71.4999" stroke="url(#paint1_linear_105_2)" stroke-width="2" stroke-linecap="round"/>
              </g>
              <defs>
                <filter id="filter0_d_105_2" x="6.00757" y="68.4914" width="19.4846" height="27.5167" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="1" dy="3"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.820833 0 0 0 0 0.0257661 0 0 0 0 0 0 0 0 0.2 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_2"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_2" result="shape"/>
                </filter>
                <filter id="filter1_d_105_2" x="18.4999" y="55.9999" width="12" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="1" dy="1"/>
                  <feGaussianBlur stdDeviation="1.5"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.117647 0 0 0 0 0.141176 0 0 0 0.65 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_2"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_2" result="shape"/>
                </filter>
                <filter id="filter2_d_105_2" x="14.5037" y="-0.00421906" width="43.9925" height="79.5084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="1" dy="3"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.820833 0 0 0 0 0.0257661 0 0 0 0 0 0 0 0 0.2 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_2"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_2" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_105_2" x1="11.7076" y1="86.4283" x2="-7.20947" y2="69.2087" gradientUnits="userSpaceOnUse">
                  <stop offset="0.130208" stop-color="#FD251E"/>
                  <stop offset="1" stop-color="#FE725C"/>
                </linearGradient>
                <linearGradient id="paint1_linear_105_2" x1="11.7077" y1="86.4283" x2="-7.2094" y2="69.2087" gradientUnits="userSpaceOnUse">
                  <stop offset="0.130208" stop-color="#FD251E"/>
                  <stop offset="1" stop-color="#FE725C"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}