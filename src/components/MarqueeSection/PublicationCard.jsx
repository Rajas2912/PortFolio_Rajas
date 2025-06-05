import { FiBook, FiExternalLink, FiDownload } from 'react-icons/fi';

const PublicationCard = ({ publication }) => {
  return (
    <div className="flex-shrink-0 w-[300px] bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="h-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800"></div>
      
      <div className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <FiBook className="text-sm text-gray-700 dark:text-gray-300" />
          </div>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            {publication.type} • {publication.year}
          </span>
        </div>

        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">
          {publication.title}
        </h3>

        <div className="flex flex-wrap gap-1 mb-2">
          {publication.authors.map((author, index) => (
            <span 
              key={index}
              className="text-xs text-gray-600 dark:text-gray-400"
            >
              {author}{index !== publication.authors.length - 1 ? ',' : ''}
            </span>
          ))}
        </div>

        <p className="text-xs text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
          {publication.abstract}
        </p>

        <div className="flex flex-wrap gap-1 mb-2">
          {publication.keywords.map((keyword, index) => (
            <span
              key={index}
              className="px-1.5 py-0.5 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 text-[10px] font-medium rounded"
            >
              {keyword}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {publication.journal || publication.conference}
          </span>
          
          <div className="flex gap-2">
            {publication.pdfUrl && (
              <a
                href={publication.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <FiDownload className="text-sm" />
              </a>
            )}
            {publication.link && (
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <FiExternalLink className="text-sm" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard; 