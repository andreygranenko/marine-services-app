export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Content Management System</h1>
      <div className="prose mx-auto">
        <p>
          Our Content Management System (CMS) is designed to be user-friendly and intuitive, allowing easy management of
          services, products, and content across the website.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Dashboard:</strong> A central hub displaying an overview of recent updates, pending tasks, and key
            metrics.
          </li>
          <li>
            <strong>Navigation Menu:</strong> Clear, intuitive navigation with sections for Services, Products, Content,
            Users, and Settings.
          </li>
          <li>
            <strong>Services Management:</strong> Add, edit, or remove services with an easy-to-use form interface.
            Includes fields for title, description, pricing, and image uploads.
          </li>
          <li>
            <strong>Product Catalog:</strong> Manage the online store's product listings, including details like name,
            description, price, category, and inventory.
          </li>
          <li>
            <strong>Content Editor:</strong> A WYSIWYG editor for managing page content, blog posts, and other textual
            information across the site.
          </li>
          <li>
            <strong>Media Library:</strong> A centralized location for uploading, organizing, and managing all images
            and media files used on the website.
          </li>
          <li>
            <strong>User Management:</strong> Control access levels and permissions for different team members using the
            CMS.
          </li>
          <li>
            <strong>SEO Tools:</strong> Built-in features to optimize content for search engines, including meta title
            and description editors.
          </li>
        </ul>
        <p>
          The CMS interface is responsive and works well on both desktop and mobile devices, ensuring that content can
          be managed from anywhere, at any time.
        </p>
      </div>
    </div>
  )
}

