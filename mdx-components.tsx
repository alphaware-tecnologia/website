import type { MDXComponents } from "mdx/types"
import Image, { type ImageProps } from "next/image"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">{children}</h3>,
    p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>,
    li: ({ children }) => <li className="text-gray-700">{children}</li>,
    a: ({ href, children }) => (
      <a href={href} className="text-emerald-600 hover:text-emerald-700 underline">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-emerald-600 pl-4 italic text-gray-600 my-4">{children}</blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 text-emerald-700 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="rounded-lg my-4"
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}
