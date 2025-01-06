"use client";

import {
  compareAsc,
  differenceInDays,
  endOfMinute,
  intervalToDuration,
} from "date-fns";
import React, { useEffect, useState } from "react";

const eventDate: Date = new Date(2025, 4, 21, 16); //It's the date from pwr calendar, but i have no idea what the actuall hour will be

function Countdown() {
  const [currentDate, setCurrentDate] = useState<Date>(endOfMinute(new Date()));
  useEffect(() => {
    if (compareAsc(eventDate, new Date()) !== 1) {
      return;
    }
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const forDuration = intervalToDuration({
    start: currentDate,
    end: eventDate,
  });

  const days = differenceInDays(eventDate, currentDate);
  const isOver: number = compareAsc(eventDate, currentDate);
  const duration = {
    days,
    hours: forDuration.hours ?? 0,
    minutes: forDuration.minutes ?? 0,
    seconds: forDuration.seconds ?? 0,
  };
  return isOver === 1 ? (
    <div className="font-montserrat text-[64px] font-extrabold leading-[60px] text-[#FFF] sm:text-[156px] sm:leading-[110px]">
      <div className="flex flex-col justify-start sm:flex-row sm:space-x-4">
        <div className="sm:mr-20">
          <div className="mb-[-20px] px-1 text-[16px] font-medium sm:text-[28px]">
            DNI
          </div>
          <div className="px-2 text-[90px] leading-[80px] sm:text-[156px] sm:leading-[110px]">
            {duration.days}
          </div>
        </div>
        <div>
          <div className="mb-[-20px] px-1 text-[14px] font-medium sm:text-[28px]">
            GODZIN
          </div>
          <div className="px-1">{duration.hours}</div>
        </div>
        <div className="hidden sm:mt-20 sm:block sm:px-2">:</div>
        <div>
          <div className="mb-[-20px] px-1 text-[14px] font-medium sm:text-[28px]">
            MINUT
          </div>
          <div className="px-1">{duration.minutes}</div>
        </div>
        <div className="hidden sm:mt-20 sm:block sm:px-2">:</div>
        <div>
          <div className="mb-[-20px] px-1 text-[14px] font-medium sm:text-[28px]">
            SEKUND
          </div>
          <div className="px-1">{duration.seconds}</div>
        </div>
      </div>
      <div className="font-montserrat max-w-[50vw] py-5 text-left text-[20px] font-normal leading-[24px] text-[#FFF] sm:max-w-[100vw] sm:text-center sm:text-[32px]">
        Juwenalia Wrocław 2025 już 21 i 22 maja
      </div>
      <div className="flex -translate-x-20 scale-[0.55] justify-start sm:translate-x-0 sm:scale-100 sm:justify-center">
        <svg
          width="357"
          height="48"
          viewBox="0 0 357 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="357"
            height="48"
            rx="24"
            fill="url(#paint0_radial_403_279)"
          />
          <path
            d="M63.7038 20.048L62.7118 25.168H67.0958V27.312H62.2958L60.9838 34H58.7118L60.0238 27.312H55.4478L54.1998 34H51.9598L53.1758 27.312H49.1438V25.168H53.5918L54.6158 20.048H50.3278V17.936H54.9998L56.2798 11.152H58.5838L57.3038 17.936H61.9118L63.1918 11.152H65.3998L64.1198 17.936H68.1838V20.048H63.7038ZM55.8638 25.168H60.4398L61.4318 20.048H56.8558L55.8638 25.168ZM72.9353 13.424C73.4899 13.424 73.9593 13.616 74.3433 14C74.7273 14.384 74.9193 14.8533 74.9193 15.408V27.248L77.4792 24.688C77.9699 24.176 78.5459 23.792 79.2073 23.536C79.8686 23.2587 80.5619 23.12 81.2873 23.12C82.7806 23.12 84.0499 23.6427 85.0953 24.688L87.6873 27.28V15.408C87.6873 14.8533 87.8686 14.384 88.2313 14C88.6153 13.616 89.0846 13.424 89.6393 13.424C90.1939 13.424 90.6633 13.616 91.0473 14C91.4313 14.384 91.6233 14.8533 91.6233 15.408V32.016C91.6233 32.5707 91.4313 33.04 91.0473 33.424C90.6633 33.808 90.1939 34 89.6393 34C89.2553 34 88.8926 33.8827 88.5513 33.648L88.5193 33.68L88.2633 33.456L82.5673 27.728C82.1833 27.3867 81.7566 27.216 81.2873 27.216C80.7753 27.216 80.3379 27.3973 79.9753 27.76L74.0873 33.68V33.648C73.7246 33.8827 73.3406 34 72.9353 34C72.3806 34 71.9113 33.808 71.5273 33.424C71.1433 33.04 70.9513 32.5707 70.9513 32.016V15.408C70.9513 14.8533 71.1433 14.384 71.5273 14C71.9113 13.616 72.3806 13.424 72.9353 13.424ZM104.443 13.392C104.976 13.4347 105.424 13.648 105.787 14.032C106.171 14.3947 106.363 14.8427 106.363 15.376C106.363 15.9307 106.16 16.4107 105.755 16.816C105.371 17.2 104.901 17.392 104.347 17.392H104.187C103.355 17.4347 102.565 17.6267 101.819 17.968C101.093 18.3093 100.453 18.768 99.8985 19.344C99.3652 19.8987 98.9385 20.5493 98.6185 21.296C98.3198 22.0427 98.1705 22.8427 98.1705 23.696V32.016C98.1705 32.5707 97.9678 33.04 97.5625 33.424C97.1785 33.808 96.7092 34 96.1545 34C95.5998 34 95.1305 33.808 94.7465 33.424C94.3625 33.04 94.1705 32.5707 94.1705 32.016V23.696C94.1705 22.288 94.4265 20.976 94.9385 19.76C95.4718 18.5227 96.1865 17.4453 97.0825 16.528C97.9785 15.5893 99.0345 14.8427 100.251 14.288C101.467 13.7333 102.768 13.4347 104.155 13.392H104.347H104.379H104.443ZM116.21 13.584C117.853 13.3067 119.463 13.424 121.042 13.936C122.642 14.448 124.029 15.3013 125.202 16.496C126.162 17.456 126.898 18.576 127.41 19.856C127.943 21.1147 128.199 22.4267 128.178 23.792C128.178 24.88 127.997 25.9467 127.634 26.992C127.293 28.016 126.802 28.9653 126.162 29.84C125.117 31.248 123.794 32.3253 122.194 33.072C120.594 33.7973 118.93 34.1067 117.202 34C116.306 33.936 115.431 33.7547 114.578 33.456C113.725 33.1573 112.925 32.7627 112.178 32.272C111.453 31.7813 110.791 31.2053 110.194 30.544C109.597 29.8827 109.095 29.1467 108.69 28.336C108.306 27.5467 108.018 26.7253 107.826 25.872C107.655 25.0187 107.591 24.1653 107.634 23.312C107.677 22.4373 107.815 21.584 108.05 20.752C108.306 19.8987 108.669 19.0987 109.138 18.352C109.287 18.0747 109.469 17.7973 109.682 17.52H109.714C110.503 16.4533 111.463 15.5893 112.594 14.928C113.725 14.2667 114.93 13.8187 116.21 13.584ZM123.122 27.312C123.57 26.6507 123.879 25.936 124.05 25.168C124.242 24.4 124.285 23.6213 124.178 22.832C124.05 22.0427 123.815 21.3493 123.474 20.752C123.047 19.984 122.493 19.3227 121.81 18.768C121.127 18.2133 120.359 17.8293 119.506 17.616C118.674 17.3813 117.821 17.328 116.946 17.456C116.071 17.584 115.261 17.8827 114.514 18.352C113.554 18.9707 112.807 19.792 112.274 20.816C111.741 21.84 111.506 22.928 111.57 24.08C111.613 24.976 111.837 25.808 112.242 26.576C112.349 26.768 112.445 26.9707 112.53 27.184C112.637 27.376 112.754 27.568 112.882 27.76C112.69 27.44 112.509 27.1093 112.338 26.768C112.679 27.3867 113.117 27.9413 113.65 28.432C114.183 28.9013 114.781 29.2853 115.442 29.584C116.125 29.8827 116.839 30.0533 117.586 30.096C118.333 30.1173 119.058 30.0107 119.762 29.776C120.445 29.5627 121.074 29.2427 121.65 28.816C122.226 28.3893 122.717 27.888 123.122 27.312ZM142.514 30.032C143.068 30.032 143.538 30.2347 143.922 30.64C144.306 31.024 144.498 31.4933 144.498 32.048C144.498 32.6027 144.306 33.072 143.922 33.456C143.538 33.84 143.068 34.032 142.514 34.032H140.146C138.738 34.032 137.404 33.7653 136.146 33.232C134.908 32.6773 133.82 31.9413 132.882 31.024C131.964 30.0853 131.228 28.9973 130.674 27.76C130.14 26.5013 129.874 25.1573 129.874 23.728C129.874 22.32 130.14 20.9973 130.674 19.76C131.228 18.5013 131.964 17.4133 132.882 16.496C133.82 15.5573 134.908 14.8213 136.146 14.288C137.404 13.7333 138.738 13.456 140.146 13.456H142.514C143.068 13.456 143.538 13.648 143.922 14.032C144.306 14.416 144.498 14.8853 144.498 15.44C144.498 15.9947 144.306 16.4747 143.922 16.88C143.538 17.264 143.068 17.456 142.514 17.456H140.146C139.271 17.456 138.45 17.6267 137.682 17.968C136.935 18.288 136.274 18.736 135.698 19.312C135.122 19.8667 134.663 20.528 134.322 21.296C134.002 22.064 133.842 22.8747 133.842 23.728C133.842 24.6027 134.002 25.424 134.322 26.192C134.663 26.96 135.122 27.632 135.698 28.208C136.274 28.7627 136.935 29.2107 137.682 29.552C138.45 29.872 139.271 30.032 140.146 30.032H142.514ZM147.809 34V24.88L146.177 25.904L145.024 24.016L147.809 22.224V9.68H150.625V20.4L152.673 18.992L153.857 20.88L150.625 23.056V34H147.809ZM164.475 13.392C165.904 13.392 167.237 13.6693 168.475 14.224C169.733 14.7573 170.821 15.4933 171.739 16.432C172.677 17.3493 173.413 18.4373 173.947 19.696C174.501 20.9547 174.779 22.288 174.779 23.696V32.016C174.779 32.5707 174.587 33.04 174.203 33.424C173.819 33.808 173.349 34 172.795 34C172.24 34 171.76 33.808 171.355 33.424C170.971 33.04 170.779 32.5707 170.779 32.016V28.176H164.475V28.144C164.411 28.1653 164.293 28.176 164.123 28.176C163.419 28.176 162.747 28.2827 162.107 28.496C161.467 28.7093 160.88 29.008 160.347 29.392C159.835 29.776 159.387 30.2347 159.003 30.768C158.619 31.3013 158.331 31.888 158.139 32.528C158.117 32.5493 158.107 32.5707 158.107 32.592C158.107 32.6133 158.096 32.6347 158.075 32.656C157.947 33.0613 157.712 33.392 157.371 33.648C157.029 33.8827 156.635 34 156.187 34C155.632 34 155.163 33.808 154.779 33.424C154.395 33.04 154.203 32.5707 154.203 32.016V31.728V23.696C154.203 22.4373 154.416 21.2533 154.843 20.144C155.355 18.7787 156.123 17.5627 157.147 16.496C158.107 15.536 159.205 14.7787 160.443 14.224C161.701 13.6693 163.045 13.392 164.475 13.392ZM170.779 24.176V23.696C170.779 22.5867 170.512 21.5627 169.979 20.624C169.979 20.6027 169.968 20.592 169.947 20.592C169.947 20.5707 169.947 20.5493 169.947 20.528C169.861 20.4 169.776 20.272 169.691 20.144C169.605 20.016 169.52 19.8987 169.435 19.792C168.859 19.0453 168.144 18.4587 167.291 18.032C166.437 17.6053 165.499 17.392 164.475 17.392C163.451 17.392 162.501 17.6267 161.627 18.096C160.773 18.544 160.059 19.1413 159.483 19.888C159.077 20.4213 158.757 21.008 158.523 21.648C158.309 22.288 158.203 22.9707 158.203 23.696V26.064C159.035 25.4667 159.952 25.008 160.955 24.688C161.957 24.3467 163.013 24.176 164.123 24.176H164.475H170.779ZM180.717 13.424C181.271 13.424 181.741 13.616 182.125 14C182.509 14.384 182.701 14.8533 182.701 15.408V27.248L185.26 24.688C185.751 24.176 186.327 23.792 186.989 23.536C187.65 23.2587 188.343 23.12 189.069 23.12C190.562 23.12 191.831 23.6427 192.877 24.688L195.469 27.28V15.408C195.469 14.8533 195.65 14.384 196.013 14C196.397 13.616 196.866 13.424 197.421 13.424C197.975 13.424 198.445 13.616 198.829 14C199.213 14.384 199.405 14.8533 199.405 15.408V32.016C199.405 32.5707 199.213 33.04 198.829 33.424C198.445 33.808 197.975 34 197.421 34C197.037 34 196.674 33.8827 196.333 33.648L196.301 33.68L196.045 33.456L190.349 27.728C189.965 27.3867 189.538 27.216 189.069 27.216C188.557 27.216 188.119 27.3973 187.757 27.76L181.869 33.68V33.648C181.506 33.8827 181.122 34 180.717 34C180.162 34 179.693 33.808 179.309 33.424C178.925 33.04 178.733 32.5707 178.733 32.016V15.408C178.733 14.8533 178.925 14.384 179.309 14C179.693 13.616 180.162 13.424 180.717 13.424ZM212.224 13.392C212.757 13.4347 213.205 13.648 213.568 14.032C213.952 14.3947 214.144 14.8427 214.144 15.376C214.144 15.9307 213.941 16.4107 213.536 16.816C213.152 17.2 212.682 17.392 212.128 17.392H211.968C211.136 17.4347 210.346 17.6267 209.6 17.968C208.874 18.3093 208.234 18.768 207.68 19.344C207.146 19.8987 206.72 20.5493 206.4 21.296C206.101 22.0427 205.952 22.8427 205.952 23.696V32.016C205.952 32.5707 205.749 33.04 205.344 33.424C204.96 33.808 204.49 34 203.936 34C203.381 34 202.912 33.808 202.528 33.424C202.144 33.04 201.952 32.5707 201.952 32.016V23.696C201.952 22.288 202.208 20.976 202.72 19.76C203.253 18.5227 203.968 17.4453 204.864 16.528C205.76 15.5893 206.816 14.8427 208.032 14.288C209.248 13.7333 210.549 13.4347 211.936 13.392H212.128H212.16H212.224ZM225.943 13.392C227.373 13.392 228.706 13.6693 229.943 14.224C231.202 14.7573 232.29 15.4933 233.207 16.432C234.146 17.3493 234.882 18.4373 235.415 19.696C235.97 20.9547 236.247 22.288 236.247 23.696V32.016C236.247 32.5707 236.055 33.04 235.671 33.424C235.287 33.808 234.818 34 234.263 34C233.709 34 233.229 33.808 232.823 33.424C232.439 33.04 232.247 32.5707 232.247 32.016V28.176H225.943V28.144C225.879 28.1653 225.762 28.176 225.591 28.176C224.887 28.176 224.215 28.2827 223.575 28.496C222.935 28.7093 222.349 29.008 221.815 29.392C221.303 29.776 220.855 30.2347 220.471 30.768C220.087 31.3013 219.799 31.888 219.607 32.528C219.586 32.5493 219.575 32.5707 219.575 32.592C219.575 32.6133 219.565 32.6347 219.543 32.656C219.415 33.0613 219.181 33.392 218.839 33.648C218.498 33.8827 218.103 34 217.655 34C217.101 34 216.631 33.808 216.247 33.424C215.863 33.04 215.671 32.5707 215.671 32.016V31.728V23.696C215.671 22.4373 215.885 21.2533 216.311 20.144C216.823 18.7787 217.591 17.5627 218.615 16.496C219.575 15.536 220.674 14.7787 221.911 14.224C223.17 13.6693 224.514 13.392 225.943 13.392ZM232.247 24.176V23.696C232.247 22.5867 231.981 21.5627 231.447 20.624C231.447 20.6027 231.437 20.592 231.415 20.592C231.415 20.5707 231.415 20.5493 231.415 20.528C231.33 20.4 231.245 20.272 231.159 20.144C231.074 20.016 230.989 19.8987 230.903 19.792C230.327 19.0453 229.613 18.4587 228.759 18.032C227.906 17.6053 226.967 17.392 225.943 17.392C224.919 17.392 223.97 17.6267 223.095 18.096C222.242 18.544 221.527 19.1413 220.951 19.888C220.546 20.4213 220.226 21.008 219.991 21.648C219.778 22.288 219.671 22.9707 219.671 23.696V26.064C220.503 25.4667 221.421 25.008 222.423 24.688C223.426 24.3467 224.482 24.176 225.591 24.176H225.943H232.247ZM259.625 30.064C260.18 30.064 260.649 30.256 261.033 30.64C261.417 31.0027 261.609 31.4613 261.609 32.016C261.609 32.5707 261.417 33.04 261.033 33.424C260.649 33.808 260.18 34 259.625 34H242.793C242.239 34 241.769 33.808 241.385 33.424C241.001 33.04 240.809 32.5707 240.809 32.016C240.809 31.6107 240.927 31.2267 241.161 30.864L241.353 30.672L254.665 17.328H243.625C243.071 17.328 242.601 17.1467 242.217 16.784C241.855 16.4 241.673 15.9307 241.673 15.376C241.673 14.8213 241.855 14.352 242.217 13.968C242.601 13.584 243.071 13.392 243.625 13.392H259.497C260.052 13.392 260.511 13.584 260.873 13.968C261.257 14.352 261.449 14.8213 261.449 15.376C261.449 15.7813 261.332 16.1653 261.097 16.528C261.055 16.5707 261.001 16.624 260.937 16.688C260.895 16.752 260.841 16.816 260.777 16.88L254.921 22.736V22.704L247.561 30.064H259.625ZM283.062 23.728C283.041 24.2827 282.827 24.752 282.422 25.136C282.038 25.52 281.569 25.7227 281.014 25.744H266.774C266.859 26 266.977 26.2667 267.126 26.544C267.233 26.7573 267.339 26.96 267.446 27.152C267.553 27.344 267.659 27.536 267.766 27.728C267.659 27.5573 267.563 27.3973 267.478 27.248C267.393 27.0773 267.307 26.9067 267.222 26.736C267.563 27.3547 268.001 27.9093 268.534 28.4C269.067 28.8907 269.665 29.2747 270.326 29.552C271.03 29.8507 271.809 30.0213 272.662 30.064H272.79C273.345 30.064 273.803 30.256 274.166 30.64C274.55 31.0027 274.742 31.4613 274.742 32.016C274.742 32.5707 274.55 33.04 274.166 33.424C273.803 33.808 273.345 34 272.79 34C272.662 34 272.534 34 272.406 34C272.299 34 272.193 33.9893 272.086 33.968C271.19 33.904 270.315 33.7227 269.462 33.424C268.609 33.1253 267.809 32.7413 267.062 32.272C266.337 31.7813 265.675 31.2053 265.078 30.544C264.481 29.8827 263.979 29.1467 263.574 28.336C262.785 26.736 262.422 25.0507 262.486 23.28C262.571 21.488 263.083 19.8347 264.022 18.32C264.107 18.192 264.193 18.064 264.278 17.936C264.385 17.7867 264.491 17.648 264.598 17.52C265.387 16.4533 266.347 15.5893 267.478 14.928C268.609 14.2453 269.814 13.7867 271.094 13.552C272.737 13.296 274.358 13.424 275.958 13.936C277.558 14.448 278.934 15.3013 280.086 16.496C281.025 17.456 281.75 18.544 282.262 19.76C282.795 20.976 283.062 22.256 283.062 23.6V23.664V23.728ZM269.398 18.352C268.779 18.7573 268.246 19.2587 267.798 19.856C267.35 20.432 267.009 21.0613 266.774 21.744H278.806C278.699 21.424 278.55 21.0827 278.358 20.72C277.953 19.952 277.398 19.3013 276.694 18.768C276.011 18.2133 275.243 17.8187 274.39 17.584C273.558 17.3493 272.705 17.3067 271.83 17.456C270.955 17.584 270.145 17.8827 269.398 18.352ZM304.43 34C303.875 34 303.406 33.808 303.022 33.424C302.659 33.04 302.478 32.5707 302.478 32.016V20.176L299.918 22.736C299.406 23.248 298.819 23.6427 298.158 23.92C297.518 24.1973 296.835 24.336 296.11 24.336C295.384 24.336 294.691 24.1973 294.03 23.92C293.368 23.6427 292.792 23.248 292.302 22.736L289.71 20.144V32.016C289.71 32.5707 289.518 33.04 289.134 33.424C288.75 33.808 288.28 34 287.726 34C287.171 34 286.702 33.808 286.318 33.424C285.934 33.04 285.742 32.5707 285.742 32.016V15.408C285.742 14.8533 285.934 14.384 286.318 14C286.702 13.616 287.171 13.424 287.726 13.424C288.131 13.424 288.504 13.5413 288.846 13.776V13.744L289.102 13.968L294.798 19.696C295.182 20.0373 295.619 20.208 296.11 20.208C296.579 20.208 297.006 20.0373 297.39 19.696L303.278 13.776H303.31C303.651 13.5413 304.024 13.424 304.43 13.424C304.984 13.424 305.454 13.616 305.838 14C306.222 14.384 306.414 14.8533 306.414 15.408V32.016C306.414 32.5707 306.222 33.04 305.838 33.424C305.454 33.808 304.984 34 304.43 34Z"
            fill="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial_403_279"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(20.5962 16.3636) rotate(3.08903) scale(364.395 280.795)"
            >
              <stop offset="0.255129" stopColor="#049BAD" />
              <stop offset="1" stopColor="#58C473" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  ) : (
    <div>Wydarzenie już trwa!</div>
  );
}

export { Countdown };
