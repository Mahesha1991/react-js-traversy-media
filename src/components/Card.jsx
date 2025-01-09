
const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        { children }
        {/* This is how we pass variable inside className */}
    </div>
  )
}

export default Card