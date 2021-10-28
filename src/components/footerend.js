import React from 'react';

export const Footer = () => {
    return (
        <div class="bg-gray-1000">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <svg width="162" height="24" viewBox="0 0 162 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.604 4.8C0.604 3.64267 0.921333 2.74667 1.556 2.112C2.20933 1.47733 3.10533 1.16 4.244 1.16H9.088C12.4107 1.16 15.164 2.14933 17.348 4.128C19.5507 6.10667 20.652 8.75733 20.652 12.08C20.652 15.4027 19.5507 18.0533 17.348 20.032C15.164 22.0107 12.4107 23 9.088 23H4.244C3.10533 23 2.20933 22.6827 1.556 22.048C0.921333 21.4133 0.604 20.5173 0.604 19.36V4.8ZM14.212 17.008C15.5747 15.776 16.256 14.1333 16.256 12.08C16.256 10.0267 15.5747 8.384 14.212 7.152C12.8493 5.92 11.1413 5.304 9.088 5.304H5.756C5.21467 5.304 4.944 5.57467 4.944 6.116V18.044C4.944 18.5853 5.21467 18.856 5.756 18.856H9.088C11.1413 18.856 12.8493 18.24 14.212 17.008ZM29.0371 23.28C27.0211 23.28 25.3225 22.5613 23.9411 21.124C22.5785 19.6867 21.8971 17.8853 21.8971 15.72C21.8971 13.536 22.6345 11.7347 24.1091 10.316C25.5838 8.87867 27.4505 8.16 29.7091 8.16C31.8931 8.16 33.7038 8.85067 35.1411 10.232C36.5785 11.6133 37.2971 13.3493 37.2971 15.44V23H33.4331V20.844C32.4251 22.468 30.9598 23.28 29.0371 23.28ZM32.0611 18.212C32.7145 17.5587 33.0411 16.728 33.0411 15.72C33.0411 14.712 32.7145 13.8813 32.0611 13.228C31.4265 12.5747 30.6051 12.248 29.5971 12.248C28.6078 12.248 27.7865 12.584 27.1331 13.256C26.4798 13.9093 26.1531 14.7307 26.1531 15.72C26.1531 16.7093 26.4798 17.54 27.1331 18.212C27.7865 18.8653 28.6078 19.192 29.5971 19.192C30.6051 19.192 31.4265 18.8653 32.0611 18.212ZM51.086 22.916C50.0594 23.0653 48.8834 23.14 47.558 23.14C45.7287 23.14 44.3194 22.6453 43.33 21.656C42.3594 20.6667 41.874 19.2013 41.874 17.26V12.248H38.374V8.44H40.866C41.538 8.44 41.874 8.104 41.874 7.432V3.4H46.074V8.44H51.086V12.248H46.074V16.812C46.074 17.6147 46.2514 18.1933 46.606 18.548C46.9794 18.884 47.586 19.052 48.426 19.052C49.266 19.052 50.1527 18.996 51.086 18.884V22.916ZM59.0354 23.28C57.0194 23.28 55.3207 22.5613 53.9394 21.124C52.5767 19.6867 51.8954 17.8853 51.8954 15.72C51.8954 13.536 52.6327 11.7347 54.1074 10.316C55.5821 8.87867 57.4487 8.16 59.7074 8.16C61.8914 8.16 63.7021 8.85067 65.1394 10.232C66.5767 11.6133 67.2954 13.3493 67.2954 15.44V23H63.4314V20.844C62.4234 22.468 60.9581 23.28 59.0354 23.28ZM62.0594 18.212C62.7127 17.5587 63.0394 16.728 63.0394 15.72C63.0394 14.712 62.7127 13.8813 62.0594 13.228C61.4247 12.5747 60.6034 12.248 59.5954 12.248C58.6061 12.248 57.7847 12.584 57.1314 13.256C56.4781 13.9093 56.1514 14.7307 56.1514 15.72C56.1514 16.7093 56.4781 17.54 57.1314 18.212C57.7847 18.8653 58.6061 19.192 59.5954 19.192C60.6034 19.192 61.4247 18.8653 62.0594 18.212ZM86.1803 18.716C85.5643 19.2013 84.7056 19.444 83.6043 19.444C82.503 19.444 81.6443 19.2013 81.0283 18.716C80.4123 18.2307 79.899 17.428 79.4883 16.308L75.8763 6.592C75.7456 6.23733 75.5683 6.06 75.3443 6.06C75.027 6.06 74.8683 6.256 74.8683 6.648V23H70.5283V6.004C70.5283 4.23067 70.8923 2.96133 71.6203 2.196C72.367 1.412 73.4496 1.02 74.8683 1.02C76.0816 1.02 77.0616 1.34667 77.8083 2C78.5736 2.65333 79.3016 3.932 79.9923 5.836L83.0443 14.264C83.1563 14.5813 83.343 14.74 83.6043 14.74C83.8656 14.74 84.0523 14.5813 84.1643 14.264L87.1883 5.836C87.8603 3.932 88.579 2.65333 89.3443 2C90.1283 1.34667 91.127 1.02 92.3403 1.02C93.759 1.02 94.8323 1.412 95.5603 2.196C96.307 2.96133 96.6803 4.23067 96.6803 6.004V23H92.3403V6.648C92.3403 6.256 92.191 6.06 91.8923 6.06C91.6683 6.06 91.4816 6.23733 91.3323 6.592L87.7203 16.308C87.3096 17.428 86.7963 18.2307 86.1803 18.716ZM114.236 18.352C113.732 20.032 112.826 21.2733 111.52 22.076C110.213 22.8787 108.636 23.28 106.788 23.28C104.604 23.28 102.812 22.5707 101.412 21.152C100.012 19.7333 99.3117 17.9227 99.3117 15.72C99.3117 13.4987 100.03 11.688 101.468 10.288C102.924 8.86933 104.772 8.16 107.012 8.16C109.177 8.16 110.932 8.82267 112.276 10.148C113.62 11.4547 114.292 13.1067 114.292 15.104C114.292 15.8133 114.217 16.5133 114.068 17.204H103.988C103.708 17.204 103.568 17.344 103.568 17.624C103.568 18.184 103.904 18.66 104.576 19.052C105.248 19.444 106.05 19.64 106.984 19.64C108.701 19.64 109.756 19.2107 110.148 18.352H114.236ZM109.336 12.276C108.757 11.8653 108.01 11.66 107.096 11.66C106.181 11.66 105.397 11.8747 104.744 12.304C104.109 12.7147 103.698 13.2933 103.512 14.04H109.868C110.11 14.04 110.232 13.928 110.232 13.704C110.232 13.144 109.933 12.668 109.336 12.276ZM127.598 22.916C126.572 23.0653 125.396 23.14 124.07 23.14C122.241 23.14 120.832 22.6453 119.842 21.656C118.872 20.6667 118.386 19.2013 118.386 17.26V12.248H114.886V8.44H117.378C118.05 8.44 118.386 8.104 118.386 7.432V3.4H122.586V8.44H127.598V12.248H122.586V16.812C122.586 17.6147 122.764 18.1933 123.118 18.548C123.492 18.884 124.098 19.052 124.938 19.052C125.778 19.052 126.665 18.996 127.598 18.884V22.916ZM136.528 8.44H138.32V12.584H136.528C135.501 12.584 134.68 12.9293 134.064 13.62C133.448 14.292 133.14 15.1507 133.14 16.196V23H128.94V16.196C128.94 11.0253 131.469 8.44 136.528 8.44ZM143.947 5.332C143.443 5.836 142.837 6.088 142.127 6.088C141.418 6.088 140.802 5.836 140.279 5.332C139.775 4.80933 139.523 4.19333 139.523 3.484C139.523 2.77467 139.775 2.168 140.279 1.664C140.802 1.14133 141.418 0.879999 142.127 0.879999C142.837 0.879999 143.443 1.14133 143.947 1.664C144.47 2.168 144.731 2.77467 144.731 3.484C144.731 4.19333 144.47 4.80933 143.947 5.332ZM140.027 8.44H144.227V23H140.027V8.44ZM161.049 17.316C160.769 19.0893 159.957 20.5267 158.613 21.628C157.269 22.7293 155.663 23.28 153.797 23.28C151.631 23.28 149.839 22.5707 148.421 21.152C147.002 19.7147 146.293 17.904 146.293 15.72C146.293 13.536 147.002 11.7347 148.421 10.316C149.839 8.87867 151.631 8.16 153.797 8.16C155.663 8.16 157.269 8.71067 158.613 9.812C159.957 10.9133 160.769 12.3507 161.049 14.124H156.681C156.494 13.564 156.13 13.116 155.589 12.78C155.047 12.4253 154.441 12.248 153.769 12.248C152.854 12.248 152.089 12.584 151.473 13.256C150.857 13.9093 150.549 14.7307 150.549 15.72C150.549 16.7093 150.857 17.54 151.473 18.212C152.089 18.8653 152.854 19.192 153.769 19.192C154.441 19.192 155.047 19.024 155.589 18.688C156.13 18.3333 156.494 17.876 156.681 17.316H161.049Z" fill="white"/>
</svg>

            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-white">
               Understanding the hidden patterns beneath a trend is key to taking your ecommerce growth in the right direction. 
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-white">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                850-123-5021
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                hello@DataMetric.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                NIIT University, Neemrana
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
              spare ribs salami.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2021 DataMetric Inc. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    );
  };