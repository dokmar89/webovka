interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-8 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-gray-300">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

