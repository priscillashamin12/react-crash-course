export const UserGreeting = () => {
const isLoggedIn = false
return <div>Welcome {isLoggedIn? 'SHAMIN':'HI'}</div>
}

// return <div>Welcome {isLoggedIn && 'HI'}</div>
