const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/react-bricks-icon.svg"
            alt="React Bricks"
            className="w-8"
          />
          <img
            src="https://images.reactbricks.com/original/52f81cf1-01bc-43d0-9428-995351146c2a/next-js.svg"
            alt="NextJS"
            className="w-10"
          />
        </div>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{' Marcin Mukosiej '}
          <a href="https://reactbricks.com" className="hover:text-pink-600">
            powered with React Bricks
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
