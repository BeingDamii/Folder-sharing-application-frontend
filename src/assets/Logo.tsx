import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="80" height="80" rx="40" fill="#4200FF" />
          <path
            d="M10.4658 51V49.0652C10.9153 49.0456 11.2866 48.987 11.5798 48.8893C11.8925 48.7916 12.127 48.5668 12.2833 48.215C12.4592 47.8632 12.5472 47.2965 12.5472 46.5147V35.2869C12.5472 34.7592 12.5569 34.2511 12.5765 33.7625C12.6156 33.2739 12.6449 32.9026 12.6644 32.6485C12.3517 32.6681 11.9609 32.6876 11.4918 32.7072C11.0228 32.7072 10.6808 32.7169 10.4658 32.7365V30.4792H25.1235L25.2994 36.1664H23.3646C23.3646 35.0915 23.1789 34.2804 22.8076 33.7332C22.4362 33.186 21.977 32.8244 21.4297 32.6485C20.8825 32.4531 20.3451 32.3652 19.8174 32.3847L18.762 32.414C18.3516 32.414 17.9998 32.4726 17.7067 32.5899C17.4135 32.6876 17.1888 32.9221 17.0324 33.2935C16.8761 33.6453 16.7979 34.2023 16.7979 34.9645V40.0653H19.8174L19.7001 37.5442H21.9574V44.6679H20.0226C20.0226 43.847 19.8956 43.251 19.6415 42.8796C19.3874 42.5083 19.0357 42.2835 18.5861 42.2054C18.1562 42.1077 17.6774 42.0686 17.1497 42.0881H16.7979V46.1923C16.7979 46.7199 16.7881 47.2281 16.7686 47.7167C16.749 48.2053 16.7197 48.5766 16.6806 48.8307C16.8956 48.8111 17.179 48.8013 17.5308 48.8013C17.8826 48.7818 18.2246 48.772 18.5568 48.772C18.9086 48.7525 19.1529 48.7427 19.2897 48.7427V51H10.4658ZM37.7083 51.2932C37.0438 49.671 36.3793 48.0587 35.7148 46.4561C35.0699 44.8535 34.4152 43.251 33.7507 41.6484C33.5944 41.277 33.3891 40.7591 33.1351 40.0947C32.9006 39.4106 32.6465 38.6289 32.3729 37.7494C32.1188 36.87 31.8843 35.9612 31.6693 35.0231C31.7084 36.1175 31.7377 37.1533 31.7573 38.1305C31.7768 39.0882 31.7768 40.0067 31.7573 40.8862C31.7573 41.3161 31.7573 41.7559 31.7573 42.2054C31.7573 42.6549 31.7475 43.1044 31.7279 43.5539C31.7279 43.9838 31.7279 44.4236 31.7279 44.8731C31.7279 45.303 31.7279 45.7428 31.7279 46.1923C31.7279 46.7199 31.7084 47.2281 31.6693 47.7167C31.6498 48.2053 31.6204 48.5766 31.5814 48.8307C31.9136 48.7916 32.3142 48.772 32.7833 48.772C33.2719 48.7525 33.6139 48.7427 33.8093 48.7427V51H27.1254V49.0652C27.5749 49.0456 27.9462 48.987 28.2394 48.8893C28.5521 48.7916 28.7866 48.5668 28.943 48.215C29.1189 47.8632 29.2068 47.2965 29.2068 46.5147L29.3827 35.2869C29.4022 34.7592 29.4218 34.2511 29.4413 33.7625C29.4609 33.2739 29.4804 32.9026 29.5 32.6485C29.1873 32.6681 28.7964 32.6876 28.3273 32.7072C27.8583 32.7072 27.5163 32.7169 27.3013 32.7365V30.4792H33.78L38.2067 41.8243C38.3825 42.2738 38.578 42.8014 38.793 43.4073C39.0079 43.9936 39.2131 44.5701 39.4086 45.1369C39.604 45.6841 39.7506 46.1239 39.8483 46.4561H39.8776C40.1317 45.7721 40.3662 45.1076 40.5812 44.4627C40.7962 43.8177 41.0209 43.1923 41.2555 42.5865C42.0177 40.5539 42.7701 38.5312 43.5127 36.5182C44.2749 34.5052 45.0371 32.4922 45.7993 30.4792H52.5712V32.414C52.1413 32.4336 51.7602 32.4922 51.4279 32.5899C51.0957 32.6876 50.8416 32.9124 50.6657 33.2642C50.5094 33.5964 50.441 34.1632 50.4605 34.9645L50.9002 46.1923C50.9393 46.7199 50.9393 47.2281 50.9002 47.7167C50.8611 48.2053 50.8221 48.5766 50.783 48.8307C51.1152 48.7916 51.5159 48.772 51.9849 48.772C52.4735 48.7525 52.8155 48.7427 53.0109 48.7427V51H44.8613V49.0652C45.3108 49.0456 45.6919 48.987 46.0046 48.8893C46.3368 48.7916 46.5811 48.5668 46.7374 48.215C46.9133 47.8632 46.9817 47.2965 46.9427 46.5147L46.7081 40.2999C46.7081 40.0653 46.6886 39.6647 46.6495 39.0979C46.6104 38.5116 46.5713 37.8765 46.5322 37.1924C46.5127 36.4889 46.4931 35.8341 46.4736 35.2283C46.415 35.3651 46.3563 35.5019 46.2977 35.6387C46.2391 35.756 46.1902 35.883 46.1511 36.0198L40.4346 51.2932H37.7083ZM61.3654 58.9445C59.6846 58.9445 58.3557 58.7588 57.3785 58.3875C56.4013 58.0357 55.7075 57.5667 55.2971 56.9803C54.8867 56.394 54.6815 55.7686 54.6815 55.1042C54.6815 54.6937 54.7694 54.2833 54.9453 53.8729C55.1212 53.4625 55.4046 53.0619 55.7955 52.671C56.2059 52.2997 56.7629 51.987 57.4664 51.7329C56.6651 51.5179 56.0984 51.1759 55.7661 50.7068C55.4534 50.2183 55.2971 49.7003 55.2971 49.1531C55.2971 48.645 55.5023 48.0782 55.9127 47.4528C56.3231 46.8079 57.0658 46.3193 58.1407 45.9871C57.3199 45.6548 56.6456 45.1369 56.1179 44.4333C55.5902 43.7298 55.3069 42.8796 55.2678 41.8829C55.2287 40.7103 55.5218 39.6745 56.1472 38.7755C56.7726 37.8569 57.5935 37.1436 58.6097 36.6354C59.626 36.1273 60.6911 35.8732 61.8051 35.8732C62.3133 35.8732 62.8996 35.9416 63.564 36.0784C64.2285 36.2152 64.8051 36.4498 65.2937 36.782C65.5086 36.1762 65.7822 35.6094 66.1145 35.0817C66.4663 34.5345 66.8865 34.0948 67.3751 33.7625C67.8636 33.4107 68.4109 33.2348 69.0167 33.2348C69.6812 33.2348 70.1796 33.4107 70.5118 33.7625C70.8636 34.0948 71.0395 34.5443 71.0395 35.111C71.0395 35.3456 70.9809 35.6094 70.8636 35.9025C70.7659 36.1762 70.5802 36.4107 70.3066 36.6061C70.0525 36.8016 69.691 36.8993 69.2219 36.8993C68.9288 36.8993 68.6356 36.7918 68.3425 36.5768C68.0493 36.3423 67.8734 36.0687 67.8148 35.756C67.5607 35.8341 67.3066 36.0882 67.0526 36.5182C66.7985 36.9481 66.6519 37.3292 66.6129 37.6615C67.1796 38.1501 67.6096 38.7168 67.9027 39.3618C68.1959 40.0067 68.3425 40.7005 68.3425 41.4432C68.3425 42.5767 68.02 43.5832 67.3751 44.4627C66.7497 45.3226 65.9288 46.0066 64.9126 46.5147C63.9158 47.0033 62.8409 47.2476 61.6879 47.2476C61.4338 47.2476 61.1504 47.2379 60.8377 47.2183C60.525 47.1792 60.2221 47.1597 59.9289 47.1597C59.499 47.1597 59.1374 47.2379 58.8443 47.3942C58.5511 47.5506 58.4045 47.7655 58.4045 48.0391C58.4045 48.4105 58.6879 48.6645 59.2547 48.8013C59.8214 48.9381 60.7888 49.0456 62.1569 49.1238C63.6618 49.202 64.9712 49.3974 66.0852 49.7101C67.2187 50.0033 68.0982 50.4723 68.7236 51.1173C69.349 51.7622 69.6617 52.6514 69.6617 53.785C69.6617 54.6253 69.4174 55.3582 68.9288 55.9836C68.4402 56.6286 67.7855 57.166 66.9646 57.596C66.1633 58.0455 65.2741 58.3777 64.2969 58.5927C63.3197 58.8272 62.3426 58.9445 61.3654 58.9445ZM62.2155 56.9217C63.6031 56.9217 64.6487 56.6677 65.3523 56.1595C66.0754 55.6514 66.437 55.1237 66.437 54.5765C66.437 54.1661 66.2806 53.8241 65.9679 53.5504C65.6552 53.2964 65.1862 53.0912 64.5608 52.9348C63.9549 52.7785 63.1732 52.6808 62.2155 52.6417C61.7856 52.6026 61.2872 52.5733 60.7204 52.5537C60.1537 52.5342 59.6553 52.4853 59.2254 52.4071C58.9322 52.6417 58.7075 52.9348 58.5511 53.2866C58.3948 53.6384 58.3068 53.9804 58.2873 54.3126C58.2482 55.0944 58.5804 55.7198 59.284 56.1888C60.0071 56.6774 60.9843 56.9217 62.2155 56.9217ZM61.8051 45.2835C62.3328 45.2835 62.7725 45.1174 63.1243 44.7851C63.4956 44.4529 63.7693 44.0327 63.9451 43.5246C64.1406 43.0164 64.2383 42.4985 64.2383 41.9708C64.2383 41.2868 64.1504 40.6321 63.9745 40.0067C63.7986 39.3618 63.525 38.8439 63.1536 38.453C62.8018 38.0426 62.3426 37.8374 61.7758 37.8374C60.9941 37.8374 60.3882 38.1892 59.9582 38.8927C59.5283 39.5963 59.3133 40.3976 59.3133 41.2966C59.3133 41.9806 59.411 42.6353 59.6065 43.2607C59.8019 43.8666 60.0853 44.3552 60.4566 44.7265C60.8279 45.0978 61.2774 45.2835 61.8051 45.2835Z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
