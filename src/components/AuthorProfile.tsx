import { getAuthorByDocumentId } from "@/utils/getAuthorByDocumentId"

interface Props {
  documentId: string
}

export default async function AuthorProfile({ documentId }: Props) {
  const author = await getAuthorByDocumentId(documentId)

  if (!author) {
    return (
      <div className="py-16 text-center text-gray-500">
        Author not found
      </div>
    )
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
          {author.name}
        </h1>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {author.role}
        </p>
      </header>

      {/* Short Bio */}
      <section
        className="prose prose-gray dark:prose-invert max-w-none mb-10"
        dangerouslySetInnerHTML={{ __html: author.shortBio || '' }}
      />

      {/* Full Rich Content */}
      <section
        className="prose prose-gray dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: author.richText || '' }}
      />

      {/* Meta */}
      <footer className="mt-12 pt-6 border-t text-sm text-gray-500 dark:text-gray-400">
        <p>
          Published:{" "}
          {new Date(author.publishedAt || '').toLocaleDateString()}
        </p>
        <p>
          Last updated:{" "}
          {new Date(author.updatedAt || '').toLocaleDateString()}
        </p>
      </footer>
    </article>
  )
}
