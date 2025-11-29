export default function Profile() {
  return (
    <div className="pt-5 pb-10 px-5 max-w-lg mx-auto">

      {/* PROFILE HEADER */}
      <div className="flex flex-col items-center text-center">
        <img
          src="/assets/avatar.jpg"
          className="w-28 h-28 rounded-full object-cover shadow-md border"
          alt="Profile"
        />

        <h1 className="text-2xl font-bold text-gray-900 mt-4">
          Muhammad Rafi Athallah
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          NIM • 21120123130069
        </p>

        <p className="text-gray-600 text-sm mt-1 font-medium">
          Developer • NBA Pedia
        </p>
      </div>

      {/* ABOUT APP */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-5 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Tentang Profil</h2>
        <p className="text-gray-600 mt-2 leading-relaxed">
          Halaman ini menampilkan profil singkat developer aplikasi NBA Pedia 
          yang berisi informasi dasar dan preferensi NBA favorit.
        </p>
      </div>

      {/* DETAILS LIST */}
      <div className="mt-5 bg-white rounded-xl shadow-md border border-gray-100">

        <div className="px-5 py-4 border-b">
          <p className="text-gray-500 text-sm">Tim NBA Favorit</p>
          <p className="text-gray-900 font-medium flex items-center gap-2">
            <img src="/assets/teams/nuggets.png" className="w-6" />
            Denver Nuggets
          </p>
        </div>

        <div className="px-5 py-4 border-b">
          <p className="text-gray-500 text-sm">Pemain Favorit</p>
          <p className="text-gray-900 font-medium flex items-center gap-2">
            <img src="/assets/players/jokic.jpg" className="w-6 h-6 rounded-full" />
            Nikola Jokić
          </p>
        </div>

        <div className="px-5 py-4 border-b">
          <p className="text-gray-500 text-sm">Jurusan</p>
          <p className="text-gray-900 font-medium">Teknik Komputer • UNDIP</p>
        </div>

        <div className="px-5 py-4">
          <p className="text-gray-500 text-sm">Status Developer</p>
          <p className="text-gray-900 font-medium">Active Developer</p>
        </div>
      </div>

      {/* FOOTER */}
      <p className="text-center text-gray-400 text-sm mt-8">
        © 2025 NBA Pedia • Developer: Muhammad Rafi Athallah
      </p>
    </div>
  );
}
