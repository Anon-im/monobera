import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowDownUp,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  ClipboardCheck,
  Command,
  Copy,
  CreditCard,
  Edit,
  Expand,
  File,
  FileText,
  Frame,
  HelpCircle,
  Image,
  Inbox,
  Info,
  Laptop,
  Loader2,
  Lock,
  LogOut,
  Menu,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Repeat2,
  Settings,
  SortAsc,
  SortDesc,
  SunMedium,
  Trash,
  Trash2,
  Twitter,
  Unlock,
  User,
  Wallet,
  X,
  type Icon as LucideIcon,
  type LucideProps,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  activity: Activity,
  sortAsc: SortAsc,
  arrowDownUp: ArrowDownUp,
  sortDesc: SortDesc,
  command: Command,
  close: X,
  menu: Menu,
  circle: Circle,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  edit: Edit,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  expand: Expand,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  arrowDown: ArrowDown,
  help: HelpCircle,
  pizza: Pizza,
  twitter: Twitter,
  check: Check,
  copy: Copy,
  copyDone: ClipboardCheck,
  sun: SunMedium,
  moon: Moon,
  swap: Repeat2,
  laptop: Laptop,
  tooltip: Info,
  wallet: Wallet,
  frame: Frame,
  lock: Lock,
  unlock: Unlock,
  trash2: Trash2,
  empty: Inbox,
  disconnect: LogOut,
  external: ArrowUpRight,
  system: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.497 8.498 8.497z"
        fillRule="nonzero"
        fill="currentColor"
      />
    </svg>
  ),
  honeyLogo: (props: LucideProps) => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.5"
        d="M28.32 26.16C29.24 28.56 28.94 30.8 27.42 32.88C25.9 34.96 23.76 36 21 36C19.68 36 18.43 35.66 17.25 34.98C16.07 34.3 15.2 33.4 14.64 32.28C11.32 32.76 8.57 31.91 6.39 29.73C4.21 27.55 3.32 24.76 3.72 21.36C2.52 20.68 1.6 19.75 0.96 18.57C0.32 17.39 0 16.04 0 14.52C0 12.08 1.11 10.11 3.33 8.61C5.55 7.11 7.72 6.8 9.84 7.68L13.56 9.24C14.36 8 15.42 6.99 16.74 6.21C18.06 5.43 19.48 5 21 4.92V1.8C21 1.28 21.17 0.85 21.51 0.51C21.85 0.17 22.28 0 22.8 0C23.32 0 23.75 0.17 24.09 0.51C24.43 0.85 24.6 1.28 24.6 1.8V5.4C26.08 5.84 27.3 6.53 28.26 7.47C29.22 8.41 30.04 9.72 30.72 11.4H34.2C34.72 11.4 35.15 11.57 35.49 11.91C35.83 12.25 36 12.68 36 13.2C36 13.72 35.83 14.15 35.49 14.49C35.15 14.83 34.72 15 34.2 15H31.08C31 16.52 30.59 17.94 29.85 19.26C29.11 20.58 28.12 21.64 26.88 22.44L28.32 26.16ZM13.44 27.6C13.44 26.52 13.53 25.47 13.71 24.45C13.89 23.43 14.16 22.44 14.52 21.48C13.6 21.92 12.61 22.23 11.55 22.41C10.49 22.59 9.44 22.64 8.4 22.56C8.4 24.12 8.85 25.35 9.75 26.25C10.65 27.15 11.88 27.6 13.44 27.6ZM9 17.76C10.28 17.76 11.41 17.6 12.39 17.28C13.37 16.96 14.64 16.32 16.2 15.36L9 12.36C7.84 11.88 6.85 11.89 6.03 12.39C5.21 12.89 4.8 13.68 4.8 14.76C4.8 15.8 5.14 16.56 5.82 17.04C6.5 17.52 7.56 17.76 9 17.76ZM21 31.2C22 31.2 22.81 30.85 23.43 30.15C24.05 29.45 24.2 28.72 23.88 27.96L20.64 19.8C19.88 21.08 19.29 22.36 18.87 23.64C18.45 24.92 18.24 26.08 18.24 27.12C18.24 28.44 18.47 29.45 18.93 30.15C19.39 30.85 20.08 31.2 21 31.2ZM24.96 17.88C25.36 17.48 25.68 16.95 25.92 16.29C26.16 15.63 26.28 14.94 26.28 14.22C26.28 12.94 25.86 11.86 25.02 10.98C24.18 10.1 23.14 9.66 21.9 9.66C21.18 9.66 20.5 9.78 19.86 10.02C19.22 10.26 18.68 10.6 18.24 11.04L22.92 13.2L24.96 17.88Z"
        fill="#FFB303"
      />
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg
      width="595"
      height="563"
      viewBox="0 0 595 563"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M564.52 141.649C564.356 125.64 560.702 109.767 553.829 95.313C533.893 53.4771 483.684 22.9864 436.666 32.8863C429.712 34.3591 408.221 41.6408 391.231 51.4043C365.458 65.4769 335.949 71.2314 306.768 71.4769H287.813C258.604 71.2314 229.123 65.4769 203.35 51.4043C186.332 41.6408 164.814 34.3591 157.86 32.8863C110.842 22.9592 60.6882 53.4498 40.752 95.3403C33.8521 109.795 30.1703 125.667 30.0067 141.622C29.6249 176.803 45.661 208.276 70.8881 228.839C74.7062 231.975 76.3699 236.993 75.2517 241.793C30.8248 429.755 164.133 530.063 297.277 532.791L297.495 526.054C297.441 528.318 297.413 530.527 297.331 532.791C430.448 530.063 563.729 429.755 519.357 241.848C518.211 237.021 519.847 232.003 523.72 228.894L523.666 228.839C548.865 208.276 564.902 176.776 564.547 141.622L564.52 141.649Z"
        fill="#AC6D21"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M436.666 32.8862C483.684 22.9863 533.893 53.4769 553.829 95.3128C556.382 100.684 558.492 106.25 560.143 111.946C562.93 121.564 564.411 131.552 564.519 141.594C564.519 141.603 564.519 141.612 564.519 141.622C564.519 141.631 564.52 141.64 564.52 141.649L564.547 141.621C564.547 141.63 564.547 141.639 564.547 141.648C564.547 141.658 564.547 141.667 564.547 141.677C564.646 151.965 563.341 161.941 560.813 171.42C556.683 186.908 549.288 201.071 539.42 213.114C539.251 213.321 539.081 213.527 538.91 213.732C534.496 219.041 529.597 223.931 524.284 228.331C524.081 228.499 523.877 228.667 523.672 228.834C523.67 228.835 523.668 228.837 523.666 228.839L523.72 228.893C523.718 228.895 523.716 228.897 523.714 228.898C522.992 229.478 522.348 230.125 521.786 230.824C519.333 233.872 518.425 237.923 519.356 241.848C560.379 415.569 449.56 514.418 327.407 530.509C327.393 530.51 327.38 530.512 327.366 530.514C317.405 531.825 307.368 532.585 297.331 532.79C297.386 531.271 297.417 529.777 297.447 528.274C297.462 527.538 297.477 526.799 297.495 526.054L297.277 532.789L297.277 532.79C295.112 532.746 292.947 532.676 290.782 532.58C290.06 532.548 289.338 532.513 288.616 532.475C288.616 532.475 288.616 532.475 288.616 532.475C281.521 532.105 274.436 531.457 267.389 530.534C267.371 530.532 267.353 530.529 267.334 530.527C145.102 514.493 34.1633 415.631 75.2517 241.793C76.3699 236.993 74.7062 231.975 70.8881 228.839C45.6611 208.275 29.6249 176.803 30.0067 141.621C30.1703 125.667 33.8521 109.795 40.752 95.3401C60.6882 53.4496 110.842 22.959 157.86 32.8862C164.814 34.3589 186.332 41.6406 203.35 51.4042C229.123 65.4768 258.604 71.2313 287.813 71.4767H306.768C335.949 71.2313 365.458 65.4768 391.23 51.4042C408.221 41.6406 429.712 34.3589 436.666 32.8862ZM376.598 25.2124C396.154 14.0345 420.373 5.6712 430.451 3.53702L430.485 3.52985C493.353 -9.70744 556.087 30.3134 580.911 82.4073L580.922 82.4307C589.457 100.382 594.081 120.013 594.495 139.852C594.524 140.339 594.54 140.828 594.545 141.319C594.956 182.066 578.006 218.951 550.767 244.907C571.168 342.779 547.207 421.766 497.111 476.93C446.253 532.934 371.3 561.281 297.946 562.784C297.763 562.788 297.581 562.79 297.398 562.79C297.154 562.791 296.908 562.789 296.662 562.784C223.296 561.281 148.329 532.935 97.4657 476.923C47.3804 421.767 23.4278 342.797 43.8202 244.945C16.5408 218.995 -0.429449 182.114 0.00826888 141.314M376.598 25.2124C356.305 36.2248 332.098 41.2472 306.637 41.4767H287.944C262.455 41.2472 238.271 36.2245 217.975 25.2082C198.393 14.0312 174.146 5.66962 164.075 3.53702L164.057 3.53329C101.164 -9.74576 38.4887 30.3011 13.67 82.4341C4.90099 100.811 0.2195 120.975 0.00845771 141.296"
        fill="black"
      />
      <path
        d="M293.813 506.963C361.683 506.963 416.703 465.729 416.703 414.864C416.703 363.999 361.683 322.765 293.813 322.765C225.943 322.765 170.923 363.999 170.923 414.864C170.923 465.729 225.943 506.963 293.813 506.963Z"
        fill="#E0C192"
      />
      <path
        d="M173.676 129.157C186.031 120.185 188.922 102.267 176.049 94.0033C168.304 89.0397 159.767 85.6306 150.904 83.9397C142.04 82.2761 133.068 82.3579 124.45 84.2397C115.832 86.1215 107.759 89.7215 100.695 94.8487C93.6317 99.9759 87.7136 106.549 83.2682 114.158C78.8228 121.767 75.9592 130.303 74.8137 139.221C73.6683 148.166 74.2956 157.33 76.6137 166.248C80.4864 181.03 98.4317 183.812 110.786 174.839L142.231 151.985L173.676 129.13V129.157Z"
        fill="#894C29"
      />
      <path
        d="M449.185 152.012L480.63 174.867C492.985 183.839 510.93 181.058 514.803 166.276C517.148 157.385 517.748 148.194 516.603 139.249C515.457 130.304 512.594 121.794 508.148 114.185C503.703 106.576 497.785 100.004 490.721 94.8766C483.657 89.7494 475.585 86.1221 466.967 84.2676C458.349 82.3858 449.349 82.2767 440.512 83.9676C431.649 85.6312 423.113 89.0675 415.367 94.0311C402.522 102.267 405.385 120.185 417.74 129.185L449.185 152.04V152.012Z"
        fill="#894C29"
      />
      <path
        d="M273.358 368.774C287.295 363.974 302.649 363.974 316.585 368.774C324.358 371.447 331.121 375.592 330.631 381.892C329.894 391.492 314.894 408.456 304.04 411.265C296.622 413.201 292.476 413.337 285.876 411.265C275.049 407.856 260.022 391.465 259.286 381.892C258.795 375.592 265.586 371.447 273.331 368.774H273.358Z"
        fill="black"
      />
      <path
        d="M202.49 232.427C198.906 245.366 210.555 259.886 228.51 264.86C246.465 269.834 263.926 263.378 267.51 250.439C271.094 237.501 259.445 222.98 241.49 218.006C223.535 213.032 206.074 219.489 202.49 232.427Z"
        fill="#894C29"
      />
      <path
        d="M385.51 232.439C389.094 245.378 377.445 259.899 359.49 264.872C341.535 269.846 324.074 263.39 320.49 250.451C316.906 237.513 328.555 222.992 346.51 218.018C364.465 213.045 381.926 219.501 385.51 232.439Z"
        fill="#894C29"
      />
      <path
        d="M183.566 356.805C172.612 355.529 164.424 345.267 169.582 335.51C172.692 329.635 176.866 324.45 181.838 320.25C186.809 316.049 192.525 312.939 198.613 311.051C204.702 309.164 211.082 308.579 217.356 309.297C223.631 310.014 229.692 312.061 235.196 315.278C240.699 318.495 245.537 322.855 249.419 328.066C253.301 333.277 256.172 339.285 257.873 345.719C260.665 356.407 250.376 364.515 239.396 363.239L211.481 359.996L183.566 356.752V356.805Z"
        fill="black"
      />
      <path
        d="M409.434 356.805C420.388 355.529 428.576 345.267 423.418 335.51C420.308 329.635 416.134 324.45 411.162 320.25C406.191 316.049 400.475 312.939 394.387 311.051C388.298 309.164 381.918 308.579 375.643 309.297C369.369 310.014 363.308 312.061 357.804 315.278C352.301 318.495 347.462 322.855 343.581 328.066C339.699 333.277 336.828 339.285 335.127 345.719C332.335 356.407 342.624 364.515 353.604 363.239L381.519 359.996L409.434 356.752V356.805Z"
        fill="black"
      />
    </svg>
  ),

  metamask: (props: LucideProps) => (
    <svg viewBox="0 0 40 40" {...props}>
      <path
        d="M36.0112 3.33337L22.1207 13.6277L24.7012 7.56091L36.0112 3.33337Z"
        fill="#E17726"
      />
      <path
        d="M4.00261 3.33337L17.7558 13.7238L15.2989 7.56091L4.00261 3.33337Z"
        fill="#E27625"
      />
      <path
        d="M31.0149 27.2023L27.3227 32.8573L35.2287 35.0397L37.4797 27.3258L31.0149 27.2023Z"
        fill="#E27625"
      />
      <path
        d="M2.53386 27.3258L4.77116 35.0397L12.6772 32.8573L8.9987 27.2023L2.53386 27.3258Z"
        fill="#E27625"
      />
      <path
        d="M12.2518 17.6496L10.0419 20.9712L17.8793 21.3281L17.6048 12.8867L12.2518 17.6496Z"
        fill="#E27625"
      />
      <path
        d="M27.762 17.6494L22.3129 12.7905L22.1207 21.3279L29.9581 20.9711L27.762 17.6494Z"
        fill="#E27625"
      />
      <path
        d="M12.6772 32.8574L17.3989 30.5652L13.336 27.3809L12.6772 32.8574Z"
        fill="#E27625"
      />
      <path
        d="M22.6009 30.5652L27.3226 32.8574L26.6637 27.3809L22.6009 30.5652Z"
        fill="#E27625"
      />
      <path
        d="M27.3226 32.8575L22.6009 30.5653L22.9715 33.6399L22.9303 34.9301L27.3226 32.8575Z"
        fill="#D5BFB2"
      />
      <path
        d="M12.6772 32.8575L17.0694 34.9301L17.042 33.6399L17.3989 30.5653L12.6772 32.8575Z"
        fill="#D5BFB2"
      />
      <path
        d="M17.1518 25.3495L13.2262 24.1965L15.9988 22.92L17.1518 25.3495Z"
        fill="#233447"
      />
      <path
        d="M22.848 25.3495L24.001 22.92L26.801 24.1965L22.848 25.3495Z"
        fill="#233447"
      />
      <path
        d="M12.6773 32.8573L13.3635 27.2023L8.99876 27.3258L12.6773 32.8573Z"
        fill="#CC6228"
      />
      <path
        d="M26.6364 27.2023L27.3227 32.8573L31.0149 27.3258L26.6364 27.2023Z"
        fill="#CC6228"
      />
      <path
        d="M29.9581 20.9709L22.1207 21.3278L22.8482 25.3495L24.0011 22.92L26.8012 24.1965L29.9581 20.9709Z"
        fill="#CC6228"
      />
      <path
        d="M13.2263 24.1965L15.9989 22.92L17.1519 25.3495L17.8793 21.3278L10.0419 20.9709L13.2263 24.1965Z"
        fill="#CC6228"
      />
      <path
        d="M10.0419 20.9709L13.3361 27.3809L13.2263 24.1965L10.0419 20.9709Z"
        fill="#E27525"
      />
      <path
        d="M26.8011 24.1965L26.6638 27.3809L29.958 20.9709L26.8011 24.1965Z"
        fill="#E27525"
      />
      <path
        d="M17.8793 21.3278L17.1519 25.3494L18.0715 30.0985L18.2637 23.8396L17.8793 21.3278Z"
        fill="#E27525"
      />
      <path
        d="M22.1205 21.3278L21.7499 23.8258L21.9283 30.0985L22.848 25.3494L22.1205 21.3278Z"
        fill="#E27525"
      />
      <path
        d="M22.848 25.3496L21.9284 30.0987L22.601 30.5654L26.6638 27.381L26.8011 24.1967L22.848 25.3496Z"
        fill="#F5841F"
      />
      <path
        d="M13.2262 24.1967L13.336 27.381L17.3989 30.5654L18.0714 30.0987L17.1518 25.3496L13.2262 24.1967Z"
        fill="#F5841F"
      />
      <path
        d="M22.9303 34.93L22.9715 33.6398L22.6284 33.3378H17.3714L17.042 33.6398L17.0694 34.93L12.6772 32.8574L14.2145 34.1202L17.3302 36.2751H22.6696L25.7853 34.1202L27.3226 32.8574L22.9303 34.93Z"
        fill="#C0AC9D"
      />
      <path
        d="M22.601 30.5653L21.9284 30.0986H18.0715L17.3989 30.5653L17.0421 33.6399L17.3715 33.3379H22.6285L22.9716 33.6399L22.601 30.5653Z"
        fill="#161616"
      />
      <path
        d="M36.5875 14.3003L37.7542 8.61779L36.011 3.33337L22.6009 13.2846L27.7618 17.6493L35.0365 19.7768L36.6424 17.8964L35.9424 17.3886L37.0679 16.3728L36.2169 15.7003L37.3287 14.863L36.5875 14.3003Z"
        fill="#763E1A"
      />
      <path
        d="M2.24573 8.61779L3.42615 14.3003L2.67123 14.863L3.78302 15.7003L2.93202 16.3728L4.05753 17.3886L3.35752 17.8964L4.96343 19.7768L12.2518 17.6493L17.399 13.2846L4.00263 3.33337L2.24573 8.61779Z"
        fill="#763E1A"
      />
      <path
        d="M35.0365 19.777L27.7619 17.6495L29.958 20.9712L26.6638 27.3811L31.0149 27.3262H37.4797L35.0365 19.777Z"
        fill="#F5841F"
      />
      <path
        d="M12.2517 17.6495L4.96332 19.777L2.53386 27.3262H8.99869L13.336 27.3811L10.0419 20.9712L12.2517 17.6495Z"
        fill="#F5841F"
      />
      <path
        d="M22.1205 21.3276L22.6009 13.2843L24.701 7.56067H15.2988L17.3988 13.2843L17.8792 21.3276L18.0577 23.8531L18.0714 30.0984H21.9283L21.9421 23.8531L22.1205 21.3276Z"
        fill="#F5841F"
      />
    </svg>
  ),
  walletConnect: (props: LucideProps) => (
    <svg viewBox="0 0 40 40" {...props}>
      <path
        d="M8.68096 12.4756C14.9323 6.39698 25.0677 6.39698 31.3191 12.4756L32.0714 13.2071C32.384 13.511 32.384 14.0038 32.0714 14.3077L29.4978 16.8103C29.3415 16.9622 29.0881 16.9622 28.9318 16.8103L27.8965 15.8036C23.5354 11.563 16.4647 11.563 12.1036 15.8036L10.9948 16.8817C10.8385 17.0336 10.5851 17.0336 10.4288 16.8817L7.85517 14.3791C7.54261 14.0752 7.54261 13.5824 7.85517 13.2785L8.68096 12.4756ZM36.6417 17.6511L38.9322 19.8783C39.2448 20.1823 39.2448 20.675 38.9322 20.979L28.6039 31.022C28.2913 31.3259 27.7846 31.3259 27.472 31.022C27.472 31.022 27.472 31.022 27.472 31.022L20.1416 23.8942C20.0634 23.8182 19.9367 23.8182 19.8586 23.8942C19.8586 23.8942 19.8586 23.8942 19.8586 23.8942L12.5283 31.022C12.2157 31.3259 11.709 31.3259 11.3964 31.022C11.3964 31.022 11.3964 31.022 11.3964 31.022L1.06775 20.9788C0.755186 20.6749 0.755186 20.1821 1.06775 19.8782L3.35833 17.6509C3.6709 17.347 4.17767 17.347 4.49024 17.6509L11.8208 24.7789C11.8989 24.8549 12.0256 24.8549 12.1038 24.7789C12.1038 24.7789 12.1038 24.7789 12.1038 24.7789L19.4339 17.6509C19.7465 17.347 20.2533 17.347 20.5658 17.6509C20.5658 17.6509 20.5658 17.6509 20.5658 17.6509L27.8964 24.7789C27.9745 24.8549 28.1012 24.8549 28.1794 24.7789L35.5098 17.6511C35.8223 17.3471 36.3291 17.3471 36.6417 17.6511Z"
        fill="#3389FB"
      />
    </svg>
  ),
  coinbase: (props: LucideProps) => (
    <svg viewBox="0 0 400 400" {...props}>
      <g stroke="none" fillRule="evenodd">
        <path
          d="M193.4 60.265C87.303 66.651 25.782 181.12 79.826 271.586c57.163 95.688 198.154 89.201 246.382-11.336C371.654 165.512 297.595 53.993 193.4 60.265m47.221 95.946c1.213.75 2.418 1.955 3.168 3.168l1.211 1.958v77.326l-1.211 1.958c-.75 1.213-1.955 2.418-3.168 3.168L238.663 245h-77.326l-1.958-1.211c-1.213-.75-2.418-1.955-3.168-3.168L155 238.663l-.119-37.831c-.08-25.344.018-38.306.297-39.267.685-2.365 2.559-4.562 4.876-5.717l2.127-1.06 38.241.106 38.241.106 1.958 1.211"
          fill="#fbfbfc"
        />
        <path
          d="M183.6.43C41.847 12.741-42.613 163.705 21.396 290.354c49.819 98.572 170.31 138.107 268.958 88.25 98.572-49.819 138.107-170.31 88.25-268.958C348.052 49.197 290.688 9.389 222 .97c-6.325-.775-31.6-1.13-38.4-.54M218 60.975c81.04 11.263 135.239 87.02 119.351 166.825-15.844 79.589-97.673 129.334-175.893 106.929-74.141-21.237-117.409-99.181-96.187-173.271C81.09 106.232 129.39 66.081 186.8 60.433c5.76-.567 25.716-.22 31.2.542m-57.4 94.781c-1.92.838-3.855 2.682-4.648 4.427-.974 2.145-1.175 76.834-.213 79.13.828 1.974 2.657 3.923 4.444 4.735 2.145.974 76.834 1.175 79.13.213 1.974-.828 3.923-2.657 4.735-4.444.974-2.145 1.175-76.834.213-79.13-.828-1.974-2.657-3.923-4.444-4.735-2.115-.96-77.043-1.146-79.217-.196"
          fill="#0454fc"
        />
        <path
          d="M181.5 155.1c10.175.059 26.825.059 37 0 10.175-.06 1.85-.108-18.5-.108s-28.675.048-18.5.108M154.992 200c0 20.35.048 28.675.108 18.5.059-10.175.059-26.825 0-37-.06-10.175-.108-1.85-.108 18.5m90 0c0 20.35.048 28.675.108 18.5.059-10.175.059-26.825 0-37-.06-10.175-.108-1.85-.108 18.5M181.5 245.1c10.175.059 26.825.059 37 0 10.175-.06 1.85-.108-18.5-.108s-28.675.048-18.5.108"
          fill="#5286fc"
        />
        <path
          d="M192.7 60.282a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173m12.8 0a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173M60.109 193.6c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m279.6 0c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m-279.6 12.8c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m279.6 0c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m-238.926 92.5c1.658 1.766 2.017 2.084 2.017 1.783 0-.064-.855-.919-1.9-1.9L99 297l1.783 1.9m198.017.1c-.972.99-1.677 1.8-1.567 1.8.11 0 .995-.81 1.967-1.8.972-.99 1.677-1.8 1.567-1.8-.11 0-.995.81-1.967 1.8m-106.1 40.882a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173m12.8 0a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173"
          fill="#84acfc"
        />
        <path
          d="M100.786 101.1l-2.186 2.3 2.3-2.186c2.137-2.032 2.483-2.414 2.186-2.414-.062 0-1.097 1.035-2.3 2.3M298.8 101c1.195 1.21 2.263 2.2 2.373 2.2.11 0-.778-.99-1.973-2.2-1.195-1.21-2.263-2.2-2.373-2.2-.11 0 .778.99 1.973 2.2"
          fill="#7cacfc"
        />
      </g>
    </svg>
  ),
  bgt: (props: LucideProps) => (
    <svg
      width="31"
      height="28"
      viewBox="0 0 31 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.4539 25.4228C13.3401 25.2237 13.1304 25.1005 12.9026 25.1005H12.8612C12.5687 25.1005 12.5117 25.1005 12.2529 25.1005H6.15167C5.89282 25.1005 5.65208 24.9617 5.52265 24.7338L2.47335 19.3872C2.34392 19.1592 2.34392 18.8789 2.47335 18.651L5.52265 13.3044C5.65208 13.0765 5.89282 12.9377 6.15167 12.9377H12.2529C12.5117 12.9377 12.7525 13.0765 12.8819 13.3044L15.9312 18.651C16.0606 18.8789 16.0606 19.1592 15.9312 19.3872C15.8794 19.4788 15.8794 19.5915 15.9312 19.6832L16.4463 20.5869C16.788 21.1868 17.6422 21.1868 17.9839 20.5869C18.5378 19.6177 18.5378 18.4231 17.9839 17.4513L14.9346 12.1046C14.3806 11.1354 13.3582 10.5381 12.2529 10.5381H6.15167C5.04377 10.5381 4.0213 11.1354 3.46994 12.1046L0.415461 17.4513C-0.138487 18.4205 -0.138487 19.6151 0.415461 20.5869L3.46476 25.9336C4.01871 26.9028 5.04119 27.5001 6.14649 27.5001H12.2684C13.3193 27.4975 13.9742 26.3449 13.4488 25.4228H13.4539Z"
        fill="#653B1B"
      />
      <path
        d="M29.7697 17.4519L26.7204 12.1053C26.6661 12.0084 26.6065 11.9167 26.5418 11.8276C26.0836 11.1937 25.1311 11.2434 24.7428 11.9245L24.66 12.0686C24.4425 12.4511 24.4425 12.92 24.6625 13.2998V13.3051L27.717 18.6517C27.8464 18.8796 27.8464 19.1599 27.717 19.3878L24.6677 24.7345C24.5383 24.9624 24.2976 25.1012 24.0387 25.1012H17.9375C17.6787 25.1012 17.4379 24.9624 17.3085 24.7345L14.2592 19.3878C14.1298 19.1599 14.1298 18.8796 14.2592 18.6517L17.3085 13.3051C17.4379 13.0772 17.6787 12.9383 17.9375 12.9383C18.2093 12.9383 18.463 12.7916 18.6002 12.5506L19.0868 11.6966C19.3819 11.1806 19.0143 10.5361 18.4242 10.5361H17.9375C16.8296 10.5361 15.8071 11.1334 15.2558 12.1027L12.2065 17.4493C11.6525 18.4186 11.6525 19.6131 12.2065 20.585L15.2558 25.9316C15.8097 26.9009 16.8322 27.4982 17.9375 27.4982H24.0387C25.1466 27.4982 26.1691 26.9009 26.7204 25.9316L29.7697 20.585C30.3237 19.6157 30.3237 18.4212 29.7697 17.4493V17.4519Z"
        fill="#653B1B"
      />
      <path
        d="M24.0127 7.41317L20.9634 2.06653C20.4095 1.09727 19.387 0.5 18.2817 0.5H12.1805C11.0726 0.5 10.0501 1.09727 9.49879 2.06653L6.44949 7.41317L6.42619 7.45246C5.97578 8.24621 6.54268 9.23642 7.44867 9.23642C7.88354 9.23642 8.28476 9.00066 8.49961 8.61819V8.61295L11.5541 3.26632C11.6835 3.03841 11.9243 2.89957 12.1831 2.89957H18.2843C18.5432 2.89957 18.7839 3.03841 18.9133 3.26632L21.9626 8.61295C22.092 8.84086 22.092 9.12116 21.9626 9.34907L18.9133 14.6957C18.7839 14.9236 18.5432 15.0625 18.2843 15.0625H12.1831C11.9243 15.0625 11.6835 14.9236 11.5541 14.6957C11.3988 14.4233 11.1089 14.253 10.7982 14.253H10.0786C9.4056 14.253 8.98626 14.9891 9.32277 15.5811L9.50138 15.8955C10.0553 16.8647 11.0778 17.462 12.1831 17.462H18.2843C19.3922 17.462 20.4147 16.8647 20.966 15.8955L24.0153 10.5489C24.5693 9.57959 24.5693 8.38505 24.0153 7.41317H24.0127Z"
        fill="#653B1B"
      />
    </svg>
  ),
  honey: (props: LucideProps) => (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.77863 3.62096L5.8015 3.5812L7.01474 1.47161C7.01488 1.47137 7.01503 1.47113 7.01518 1.47089C7.21489 1.1403 7.46556 0.884197 7.78834 0.699862C8.1123 0.514851 8.45645 0.422432 8.84387 0.422432H11.1745C11.5513 0.422432 11.9062 0.514948 12.23 0.699862C12.554 0.884914 12.8147 1.14139 13.0027 1.47L13.0029 1.47043L14.2279 3.58146L14.2508 3.62096H14.2964H16.5945C16.9713 3.62096 17.3263 3.71348 17.6501 3.89839C17.9741 4.08342 18.2347 4.33986 18.4226 4.6684L5.77863 3.62096ZM5.77863 3.62096H5.73276H3.43465C3.04724 3.62096 2.70309 3.71338 2.37913 3.89839C2.05636 4.08273 1.80568 4.33882 1.60597 4.6694C1.60582 4.66965 1.60567 4.6699 1.60552 4.67015L0.381465 6.80102L0.381489 6.80103L0.380401 6.80281C0.192834 7.11028 0.0993204 7.43718 0.0993204 7.80637C0.0993204 8.17512 0.192599 8.49141 0.380401 8.79926L0.380422 8.79925L0.38142 8.80098L1.62803 10.9653L1.65089 11.005L1.62795 11.0446L0.381335 13.1983L0.381353 13.1983L0.380401 13.1999C0.192948 13.5072 0.0993204 13.8447 0.0993204 14.2034C0.0993204 14.5622 0.192948 14.8997 0.380401 15.207L0.380424 15.207L0.381465 15.2088L1.6064 17.3411L1.60647 17.3413C1.79441 17.6699 2.0551 17.9264 2.37913 18.1114C2.70423 18.2971 3.05934 18.3995 3.43465 18.3995H5.73276H5.77863L5.8015 18.4393L7.01559 20.5503L7.01569 20.5505C7.20362 20.8791 7.46431 21.1355 7.78834 21.3206C8.11344 21.5063 8.46856 21.6087 8.84387 21.6087H11.1745C11.5618 21.6087 11.9053 21.5163 12.2284 21.3215L12.2284 21.3215L12.23 21.3206C12.5528 21.1362 12.8035 20.8801 13.0033 20.5494C13.0034 20.5492 13.0035 20.549 13.0036 20.5488L14.2279 18.439L14.2508 18.3995H14.2964H16.5945C16.9819 18.3995 17.3253 18.3071 17.6485 18.1124L17.6484 18.1123L17.6501 18.1114C17.9728 17.9271 18.2235 17.671 18.4232 17.3405C18.4233 17.3402 18.4235 17.3399 18.4237 17.3397L19.6367 15.209L19.6367 15.209L19.638 15.207C19.8255 14.8995 19.919 14.5726 19.919 14.2034C19.919 13.8342 19.8255 13.5073 19.6379 13.1999L19.637 13.1983L18.3904 11.0446L18.3675 11.005L18.3903 10.9653L19.6369 8.80098L19.6369 8.80097L19.638 8.79926C19.8256 8.4916 19.919 8.16468 19.919 7.80637C19.919 7.44762 19.8254 7.1101 19.638 6.80281L19.6379 6.80283L19.6367 6.80075L18.4227 4.66853L5.77863 3.62096ZM14.2277 12.0316L14.2505 11.9918H14.2964H16.6271H16.6736L16.6963 12.0324L17.8887 14.1647L17.9103 14.2034L17.8887 14.2421L16.6963 16.3745L16.6736 16.4151H16.6271H14.2964H14.2505L14.2277 16.3753L13.0027 14.2429L12.9801 14.2034L13.0027 14.1639L14.2277 12.0316ZM8.80747 8.83331L8.83029 8.79324H8.87639H11.1528H11.1989L11.2217 8.83331L12.4358 10.9657L12.4582 11.0049L12.4358 11.0441L11.2217 13.1765L11.1989 13.2166H11.1528H8.87639H8.83029L8.80747 13.1765L7.59338 11.0441L7.57104 11.0049L7.59338 10.9657L8.80747 8.83331ZM11.1528 15.1903H11.1986L11.2215 15.23L12.4681 17.3944L12.491 17.434L12.4681 17.4736L11.254 19.574L11.2311 19.6136H11.1853H8.85471H8.80895L8.78605 19.574L7.57196 17.4736L7.54906 17.434L7.5719 17.3944L8.81851 15.23L8.87639 15.2634V15.1903H8.88723H9.02442H11.1528ZM7.0266 14.1642L7.04894 14.2034L7.0266 14.2427L5.81251 16.375L5.7897 16.4151H5.7436H3.44549H3.39939L3.37658 16.375L2.16249 14.2427L2.14015 14.2034L2.16249 14.1642L3.37658 12.0318L3.39939 11.9918H3.44549H5.7436H5.7897L5.81251 12.0318L7.0266 14.1642ZM6.99295 7.72707H7.09409L7.0266 7.8456L5.81251 9.97796L5.7897 10.018H5.7436H3.41297H3.36646L3.34376 9.97743L2.15135 7.84507L2.12951 7.80602L2.15165 7.76713L3.36574 5.63478L3.38855 5.59472H3.43465H5.73276H5.77886L5.80167 5.63478L6.99295 7.72707ZM8.86555 6.74647L8.80776 6.77992L7.56114 4.62624L7.53822 4.58664L7.56103 4.54698L8.77512 2.43595L8.79799 2.39618H8.84387H11.1745H11.2204L11.2432 2.43595L12.4573 4.54698L12.4801 4.58664L12.4572 4.62624L11.2106 6.77992L11.1877 6.81949H11.142H9.01392H8.87639H8.86555V6.74647ZM14.2277 5.63451L14.2505 5.59472H14.2964H16.5945H16.6406L16.6635 5.63478L17.8776 7.76713L17.8999 7.80637L17.8776 7.8456L16.6635 9.97796L16.6406 10.018H16.5945H14.2964H14.2505L14.2277 9.97822L13.0027 7.84587L12.9801 7.80637L13.0027 7.76687L14.2277 5.63451Z"
        fill="#BE9B7E"
        stroke="#F8F5F3"
        strokeWidth="0.158602"
      />
    </svg>
  ),
};
