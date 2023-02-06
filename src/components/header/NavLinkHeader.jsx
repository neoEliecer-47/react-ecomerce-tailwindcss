export default ({ text }) => (
    <a href="#" className="group py-8 relative">
        <span className="group-hover:text-Orange-ecomerce">{text}</span>
        <span className="absolute bottom-0 left-0 block h-2 w-full scale-x-0 group-hover:bg-Orange-ecomerce group-hover:scale-x-100 transition-all duration-600"></span>
    </a>
)