import React from "react"
import images from '../../constants/images'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import ColorPanel from "../../components/colorPanel";

const Yutar = () => {
    return (
        <div className="bg-white m-12 mx-10p flex flex-col text-base text-white">
            <div className="bg-yutar relative">
                <div className="p-10 text-gray-900 w-6/12 break-normal z-50">
                    <p className="text-25p mt-10p">Yutars for Lenders Web Application Design</p>
                    <p className="mt-8">A platform used by lenders to check if a borrower is already overleveraged (and whose account is already negative) and recent inquiries by other lenders.</p>
                    <p className="text-xl mt-6">Problem Statement</p>
                    <p className="mt-8">Over 3,000 federal public sector borrowers are indebted to at least five different lenders simultaneously, thereby becoming difficult for borrowers to pay back debts because of insufficient income, leaving lenders to cope with huge losses.</p>
                    <p className="mt-8 mb-10">These prompted the need to have a data collection web application that helps lenders to have access to borrowers infomations to checkmate overleverage borrowers.</p>
                    <div className="flex">
                        <div className="text-black border-b-2 p-2 border-primary items-center flex">
                            Lunch Project &nbsp;
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.7101 12.7099L11.7101 7.70994C11.8011 7.61484 11.8725 7.50269 11.9201 7.37994C12.0201 7.13648 12.0201 6.8634 11.9201 6.61994C11.8725 6.49719 11.8011 6.38505 11.7101 6.28994L6.7101 1.28994C6.61687 1.1967 6.50618 1.12274 6.38435 1.07228C6.26253 1.02182 6.13196 0.995849 6.0001 0.995849C5.7338 0.995849 5.47841 1.10164 5.2901 1.28994C5.1018 1.47824 4.99601 1.73364 4.99601 1.99994C4.99601 2.26624 5.1018 2.52164 5.2901 2.70994L8.5901 5.99994L1.0001 5.99994C0.734887 5.99994 0.480532 6.1053 0.292996 6.29283C0.10546 6.48037 0.0001037 6.73472 0.000103688 6.99994C0.000103676 7.26516 0.10546 7.51951 0.292996 7.70705C0.480532 7.89458 0.734887 7.99994 1.0001 7.99994L8.5901 7.99994L5.2901 11.2899C5.19637 11.3829 5.12198 11.4935 5.07121 11.6154C5.02044 11.7372 4.9943 11.8679 4.9943 11.9999C4.9943 12.132 5.02044 12.2627 5.07121 12.3845C5.12198 12.5064 5.19637 12.617 5.2901 12.7099C5.38307 12.8037 5.49367 12.8781 5.61553 12.9288C5.73739 12.9796 5.86809 13.0057 6.0001 13.0057C6.13211 13.0057 6.26282 12.9796 6.38468 12.9288C6.50654 12.8781 6.61714 12.8037 6.7101 12.7099Z" fill="#83523B" />
                            </svg>
                        </div>
                    </div>
                </div>
                <img className="absolute right-0 bottom-0 h-full" style={{ maxWidth: "50%" }} src={images.IMAGE_YUTAR1}></img>
            </div>
            <div className="p-10 pt-6 flex flex-col text-black">
                <p className="text-gray-600 text-sm">Style Guide</p>
                <p className="text-3xl mt-8">Colors & Typography</p>
                <div className="mt-6 flex">
                    <ColorPanel className="boxshadow mr-8 mb-8 w-150 h-150 rounded-2xl text-sm text-white" color="#0364FF" />
                    <ColorPanel className="boxshadow mr-8 mb-8 w-150 h-150 rounded-2xl text-sm" color="#F3F6FA" />
                    <ColorPanel className="boxshadow mr-8 mb-8 w-150 h-150 rounded-2xl text-sm" color="#FFFFFF" />
                    <ColorPanel className="boxshadow mr-8 mb-8 w-150 h-150 rounded-2xl text-sm text-white" color="#000000" />
                </div>
                <p className="text-3xl mt-8">Typography</p>
                <div className="flex mt-8 text-gray-700 flex-wrap justify-around text-base">
                    <div className="flex flex-col px-10">
                        <p className="text-4xl">Heading 1</p>
                        <p className="mt-4">Inter - Bold 36px | Line Height 44px</p>
                        <p className="text-3xl mt-8">Heading 2</p>
                        <p className="mt-4">Inter - Semi-Bold 30px | Line Height 36px</p>
                        <p className="text-2xl mt-8">Heading 3</p>
                        <p className="mt-4">Inter - Semi-Bold 24px | Line Height 32px</p>
                    </div>
                    <div className="border-r"></div>
                    <div className="flex flex-col px-10">
                        <p className="text-4xl">Body</p>
                        <p className="mt-4">Inter - Regular 16px | Line Height 24px</p>
                    </div>
                    <div className="border-r"></div>
                    <div className="flex flex-col px-10">
                        <p className="text-4xl">Icon Pack</p>
                        <div className="flex justify-center">
                            <p className="p-2">
                                <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="59" height="59" rx="6.14583" fill="#438AFB" />
                                    <path d="M24.6465 12H17.5908C17.3188 12 17.058 12.108 16.8658 12.3004L12.3004 16.8658C12.108 17.058 12 17.3189 12 17.5908V29.5C12 30.0663 12.4591 30.5254 13.0254 30.5254H24.6465C25.2128 30.5254 25.6719 30.0663 25.6719 29.5V13.0254C25.6719 12.4591 25.2128 12 24.6465 12ZM23.6211 28.4746H14.0508V18.0156L18.0156 14.0508H23.6211V28.4746Z" fill="white" />
                                    <path d="M45.9746 28.4746H38.919C38.647 28.4746 38.3862 28.5826 38.1939 28.775L33.6285 33.3404C33.4362 33.5327 33.3281 33.7935 33.3281 34.0654V45.9746C33.3281 46.5409 33.7872 47 34.3535 47H45.9746C46.5409 47 47 46.5409 47 45.9746V29.5C47 28.9337 46.5409 28.4746 45.9746 28.4746ZM44.9492 44.9492H35.3789V34.4902L39.3437 30.5254H44.9492V44.9492Z" fill="white" />
                                    <path d="M26.082 37.3955C24.7453 37.3955 23.6055 38.2528 23.1822 39.4463H19.8613V34.9688C19.8613 34.4025 19.4022 33.9434 18.8359 33.9434C18.2696 33.9434 17.8105 34.4025 17.8105 34.9688V40.4717C17.8105 41.038 18.2696 41.4971 18.8359 41.4971H23.1822C23.6055 42.6906 24.7453 43.5479 26.082 43.5479C27.7782 43.5479 29.1582 42.1679 29.1582 40.4717C29.1582 38.7755 27.7782 37.3955 26.082 37.3955ZM26.082 41.4971C25.5166 41.4971 25.0566 41.0371 25.0566 40.4717C25.0566 39.9063 25.5166 39.4463 26.082 39.4463C26.6474 39.4463 27.1074 39.9063 27.1074 40.4717C27.1074 41.0371 26.6474 41.4971 26.082 41.4971Z" fill="white" />
                                    <path d="M40.1641 17.5029H35.8178C35.3945 16.3094 34.2547 15.4521 32.918 15.4521C31.2218 15.4521 29.8418 16.8321 29.8418 18.5283C29.8418 20.2245 31.2218 21.6045 32.918 21.6045C34.2547 21.6045 35.3945 20.7472 35.8178 19.5537H39.1387V24.0312C39.1387 24.5975 39.5978 25.0566 40.1641 25.0566C40.7304 25.0566 41.1895 24.5975 41.1895 24.0312V18.5283C41.1895 17.962 40.7304 17.5029 40.1641 17.5029ZM32.918 19.5537C32.3526 19.5537 31.8926 19.0937 31.8926 18.5283C31.8926 17.9629 32.3526 17.5029 32.918 17.5029C33.4834 17.5029 33.9434 17.9629 33.9434 18.5283C33.9434 19.0937 33.4834 19.5537 32.918 19.5537Z" fill="white" />
                                </svg>
                            </p>
                            <p className="p-2">
                                <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="59" height="59" rx="5" fill="#438AFB" />
                                    <path d="M43.4227 17.6674L30.0243 12.1045C29.6886 11.9652 29.3113 11.9651 28.9758 12.1045L15.5773 17.6674C15.067 17.8793 14.7344 18.3775 14.7344 18.9301V25.6925C14.7344 35.0039 20.3623 43.3798 28.9833 46.8986C29.3145 47.0338 29.6855 47.0338 30.0167 46.8986C38.6375 43.3799 44.2656 35.004 44.2656 25.6925V18.9301C44.2656 18.3775 43.9331 17.8793 43.4227 17.6674ZM41.5313 25.6925C41.5313 33.6082 36.8828 40.8951 29.5 44.1478C22.3145 40.982 17.4688 33.8227 17.4688 25.6925V19.8428L29.5 14.8475L41.5313 19.8428V25.6925ZM27.9888 30.3009L33.8653 24.4245C34.3992 23.8906 35.2648 23.8906 35.7988 24.4245C36.3327 24.9585 36.3327 25.8241 35.7987 26.358L28.9556 33.2011C28.4216 33.7351 27.5559 33.7349 27.0221 33.2011L23.2012 29.3802C22.6673 28.8463 22.6673 27.9806 23.2012 27.4467C23.7352 26.9129 24.6008 26.9128 25.1347 27.4467L27.9888 30.3009Z" fill="white" />
                                </svg>
                            </p>
                            <p className="p-2">
                                <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="59" height="59" rx="6.14583" fill="#438AFB" />
                                    <path d="M26.583 47C23.5688 47 21.1143 44.5471 21.1143 41.5312C21.1143 40.9275 21.6043 40.4375 22.208 40.4375C22.8118 40.4375 23.3018 40.9275 23.3018 41.5312C23.3018 43.3412 24.7747 44.8125 26.583 44.8125C28.3913 44.8125 29.8643 43.3412 29.8643 41.5312C29.8643 40.9275 30.3543 40.4375 30.958 40.4375C31.5618 40.4375 32.0518 40.9275 32.0518 41.5312C32.0518 44.5471 29.5975 47 26.583 47Z" fill="white" />
                                    <path d="M38.6145 42.625H14.552C13.1448 42.625 12 41.4803 12 40.073C12 39.3261 12.3252 38.6191 12.8924 38.1333C12.929 38.1013 12.9682 38.0722 13.0091 38.0457C15.1499 36.1776 16.375 33.49 16.375 30.652V26.5833C16.375 21.8336 19.5935 17.7561 24.2019 16.6666C24.7909 16.531 25.3803 16.8912 25.5189 17.4805C25.6572 18.0683 25.2927 18.6573 24.7066 18.7959C21.0883 19.6504 18.5625 22.8529 18.5625 26.5833V30.652C18.5625 34.1754 17.018 37.5093 14.329 39.7972C14.3071 39.8148 14.2882 39.8308 14.2647 39.8469C14.2254 39.8965 14.1875 39.9724 14.1875 40.073C14.1875 40.2712 14.3539 40.4375 14.552 40.4375H38.6145C38.8129 40.4375 38.9793 40.2712 38.9793 40.073C38.9793 39.9708 38.9413 39.8965 38.9005 39.8469C38.8786 39.8308 38.858 39.8148 38.8377 39.7972C37.5312 38.6831 36.4999 37.3386 35.7738 35.8C35.5143 35.2545 35.7474 34.6027 36.2943 34.3431C36.8457 34.0836 37.4916 34.3199 37.7499 34.8652C38.3272 36.0844 39.1365 37.1549 40.1603 38.0503C40.1982 38.0765 40.2378 38.1042 40.2711 38.1333C40.8415 38.6191 41.1668 39.3261 41.1668 40.073C41.1668 41.4803 40.022 42.625 38.6145 42.625Z" fill="white" />
                                    <path d="M37.521 30.9582C32.2944 30.9582 28.042 26.7058 28.042 21.4793C28.042 16.2524 32.2944 12 37.521 12C42.7478 12 47.0002 16.2524 47.0002 21.4793C47.0002 26.7058 42.7478 30.9582 37.521 30.9582ZM37.521 14.1875C33.5003 14.1875 30.2295 17.4586 30.2295 21.4793C30.2295 25.4999 33.5003 28.7707 37.521 28.7707C41.5416 28.7707 44.8127 25.4999 44.8127 21.4793C44.8127 17.4586 41.5416 14.1875 37.521 14.1875Z" fill="white" />
                                    <path d="M37.8855 25.8541C37.2818 25.8541 36.7918 25.3641 36.7918 24.7604V20.0206H36.0625C35.4587 20.0206 34.9688 19.5306 34.9688 18.9269C34.9688 18.3231 35.4587 17.8331 36.0625 17.8331H37.8855C38.4893 17.8331 38.9793 18.3231 38.9793 18.9269V24.7604C38.9793 25.3641 38.4893 25.8541 37.8855 25.8541Z" fill="white" />
                                </svg>
                            </p>
                            <p className="p-2">
                                <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5" y="5" width="48" height="48" rx="5" fill="#438AFB" />
                                    <path d="M41.8315 20.0197L29.9643 15.0926C29.667 14.9692 29.3329 14.9691 29.0357 15.0926L17.1685 20.0197C16.7165 20.2074 16.4219 20.6487 16.4219 21.1381V27.1277C16.4219 35.3749 21.4066 42.7936 29.0424 45.9102C29.3357 46.0299 29.6643 46.0299 29.9576 45.9102C37.5932 42.7936 42.5781 35.375 42.5781 27.1277V21.1381C42.5781 20.6487 42.2836 20.2074 41.8315 20.0197ZM40.1562 27.1277C40.1562 34.1387 36.0391 40.5928 29.5 43.4737C23.1357 40.6697 18.8438 34.3287 18.8438 27.1277V21.9465L29.5 17.5221L40.1562 21.9465V27.1277ZM28.1616 31.2094L33.3664 26.0046C33.8393 25.5317 34.606 25.5316 35.0789 26.0046C35.5518 26.4775 35.5518 27.2442 35.0788 27.7171L29.0178 33.7781C28.5448 34.2511 27.7781 34.2509 27.3053 33.7781L23.9211 30.3939C23.4482 29.921 23.4482 29.1543 23.9211 28.6814C24.394 28.2085 25.1607 28.2085 25.6336 28.6814L28.1616 31.2094Z" fill="white" />
                                    <rect width="59" height="59" rx="6.14583" fill="#438AFB" />
                                    <g clip-path="url(#clip0)">
                                        <path d="M23.9729 22.9512L21.0105 25.9135L19.8711 24.7742C19.4936 24.3966 18.8814 24.3966 18.5039 24.7742C18.1263 25.1517 18.1263 25.7638 18.5039 26.1414L20.3269 27.9644C20.5157 28.1532 20.763 28.2476 21.0105 28.2476C21.2578 28.2476 21.5053 28.1532 21.6941 27.9644L25.3401 24.3184C25.7177 23.9409 25.7177 23.3287 25.3401 22.9512C24.9626 22.5736 24.3504 22.5735 23.9729 22.9512Z" fill="white" />
                                        <path d="M23.9729 29.8293L21.0105 32.7916L19.8711 31.6523C19.4936 31.2747 18.8814 31.2747 18.5039 31.6523C18.1263 32.0299 18.1263 32.642 18.5039 33.0196L20.3269 34.8425C20.5157 35.0314 20.763 35.1258 21.0105 35.1258C21.2578 35.1258 21.5053 35.0313 21.6941 34.8425L25.3401 31.1966C25.7177 30.8191 25.7177 30.2069 25.3401 29.8293C24.9625 29.4518 24.3504 29.4518 23.9729 29.8293Z" fill="white" />
                                        <path d="M23.9729 36.7075L21.0105 39.6698L19.8711 38.5305C19.4936 38.1529 18.8814 38.1529 18.5039 38.5305C18.1263 38.908 18.1263 39.5202 18.5039 39.8977L20.3269 41.7207C20.5157 41.9096 20.763 42.0039 21.0105 42.0039C21.2578 42.0039 21.5053 41.9095 21.6941 41.7207L25.3401 38.0747C25.7177 37.6972 25.7177 37.0851 25.3401 36.7075C24.9625 36.3299 24.3504 36.3299 23.9729 36.7075Z" fill="white" />
                                        <path d="M39.2854 30.1516L36.323 33.1139L35.1836 31.9746C34.8061 31.597 34.1939 31.597 33.8164 31.9746C33.4388 32.3521 33.4388 32.9643 33.8164 33.3418L35.6394 35.1648C35.8282 35.3536 36.0756 35.448 36.323 35.448C36.5703 35.448 36.8178 35.3537 37.0066 35.1648L40.6525 31.5188C41.0301 31.1413 41.0301 30.5291 40.6525 30.1516C40.2751 29.774 39.6629 29.774 39.2854 30.1516Z" fill="white" />
                                        <path d="M43.6797 25.8906C42.458 25.8906 41.3596 25.2118 40.8133 24.1192L40.6773 23.847C40.5135 23.5194 40.1787 23.3125 39.8125 23.3125H36.9121V19.7676C36.9121 18.1683 35.611 16.8672 34.0117 16.8672H32.4004V16.5449C32.4004 16.011 31.9675 15.5781 31.4336 15.5781C30.3601 15.5781 29.4285 14.8508 29.1681 13.8091L29.1488 13.7322C29.0412 13.3018 28.6545 13 28.2109 13H23.0547C22.6111 13 22.2245 13.3018 22.1168 13.7321L22.0975 13.8093C21.8372 14.8508 20.9056 15.5781 19.832 15.5781C19.2981 15.5781 18.8652 16.011 18.8652 16.5449V16.8672H17.2539C15.6546 16.8672 14.3535 18.1683 14.3535 19.7676V43.0996C14.3535 44.6989 15.6546 46 17.2539 46H34.0117C35.611 46 36.9121 44.6989 36.9121 43.0996V41.9493C36.927 41.9538 36.9417 41.9587 36.9566 41.9631C37.0472 41.9903 37.1408 42.0039 37.2344 42.0039C37.328 42.0039 37.4215 41.9903 37.5122 41.9631C39.5898 41.3398 41.3725 40.0905 42.6673 38.3503C43.9621 36.61 44.6465 34.5435 44.6465 32.3744V26.8574C44.6465 26.3235 44.2136 25.8906 43.6797 25.8906ZM20.7988 17.4017C22.1142 17.0975 23.215 16.184 23.7524 14.9336H27.5132C28.0506 16.1839 29.1516 17.0975 30.4668 17.4017V18.8008H20.7988V17.4017ZM34.9785 43.0996C34.9785 43.6327 34.5448 44.0664 34.0117 44.0664H17.2539C16.7208 44.0664 16.2871 43.6327 16.2871 43.0996V19.7676C16.2871 19.2345 16.7208 18.8008 17.2539 18.8008H18.8652V19.7676C18.8652 20.3015 19.2981 20.7344 19.832 20.7344H31.4336C31.9675 20.7344 32.4004 20.3015 32.4004 19.7676V18.8008H34.0117C34.5448 18.8008 34.9785 19.2345 34.9785 19.7676V23.3125H34.6562C34.29 23.3125 33.9553 23.5194 33.7915 23.8469L33.6554 24.1191C33.1091 25.2118 32.0108 25.8906 30.7891 25.8906C30.2551 25.8906 29.8223 26.3235 29.8223 26.8574V32.3744C29.8223 34.5435 30.5067 36.61 31.8015 38.3503C32.6633 39.5085 33.7414 40.449 34.9785 41.1324V43.0996ZM42.7129 32.3744C42.7129 35.8714 40.5234 38.909 37.2344 40.0224C33.9454 38.909 31.7559 35.8714 31.7559 32.3744V27.7341C33.219 27.4579 34.4911 26.5611 35.2444 25.246H39.2244C39.9777 26.561 41.2497 27.4579 42.7129 27.7341V32.3744Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="33" height="33" fill="white" transform="translate(13 13)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <p className="text-3xl">Design Solution</p>
                    <p className="text-xl text-lightBlack mt-5">High Fidelity Screen Design</p>
                </div>
                {[
                    {
                        pageName: "Login",
                        src: images.IMAGE_YUTAR_SOLUTION1,
                        class: ""
                    },
                    {
                        pageName: "Sign Up",
                        src: images.IMAGE_YUTAR_SOLUTION2,
                        class: "flex-row-reverse"
                    },
                    {
                        pageName: "Dashboard",
                        src: images.IMAGE_YUTAR_SOLUTION3,
                        class: "flex-col"
                    },
                    {
                        pageName: "Yutars Landing Page",
                        src: images.IMAGE_YUTAR_SOLUTION4,
                        class: "flex-col"
                    },
                ].map((page) => (
                    <div className={"flex items-center justify-center mt-10 " + page.class }>
                        <p className="text-3xl px-20 py-10">{page.pageName}</p>
                        <img className="boxshadow" src={page.src}></img>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Yutar;