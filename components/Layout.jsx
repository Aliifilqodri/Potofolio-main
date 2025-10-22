import Navbar from './Navbar'; // Pastikan path ke komponen Navbar Anda benar

// Komponen Layout menerima 'children' sebagai properti.
// 'children' akan berisi konten halaman yang dibungkusnya.
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Navbar selalu tampil di atas */}
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {children} {/* Di sinilah konten halaman (foto) akan muncul */}
      </main>

      {/* Anda juga bisa menambahkan Footer di sini */}
      <footer className="bg-muted text-muted-foreground p-4 text-center border-t border-border">
        © 2025 MyProject. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Layout;