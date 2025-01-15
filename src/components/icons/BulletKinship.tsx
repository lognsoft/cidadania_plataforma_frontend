

const BulletKinship = ({ check }:{ check:boolean }) => {
    return (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22.5173 11.5002C22.5173 12.8795 20.6035 13.8622 20.1035 15.0691C19.5862 16.3105 20.2242 18.3622 19.2931 19.2933C18.3621 20.2243 16.3104 19.6036 15.069 20.1036C13.8793 20.6036 12.8793 22.5174 11.5 22.5174C10.1207 22.5174 9.13796 20.6036 7.93106 20.1036C6.68968 19.5864 4.63796 20.2243 3.70693 19.2933C2.77589 18.3622 3.39658 16.3105 2.89658 15.0691C2.39658 13.8795 0.482788 12.8795 0.482788 11.5002C0.482788 10.1208 2.39658 9.13808 2.89658 7.93119C3.41382 6.68981 2.77589 4.63808 3.70693 3.70705C4.63796 2.77601 6.68968 3.3967 7.93106 2.8967C9.12072 2.3967 10.1207 0.48291 11.5 0.48291C12.8793 0.48291 13.8621 2.3967 15.069 2.8967C16.3104 3.41394 18.3621 2.77601 19.2931 3.70705C20.2242 4.63808 19.6035 6.68981 20.1035 7.93119C20.6035 9.12084 22.5173 10.1208 22.5173 11.5002Z"
                // fill="#E6E6E6"
                stroke="#E6E6E6"
                strokeWidth="0.57"
                strokeMiterlimit="1.73"
                className={ `${!check ? 'fill-[#E6E6E6]' : 'fill-wine'} duration-300` }
            />
        </svg>
    )
}

export default BulletKinship;