import React from "react";
import Head from "next/head";

export default function MohammedShafeequeProfile() {
  return (
    <>
      <Head>
        <title>Mohammed Shafeeque Ishwaramangala - Official Profile</title>
        <meta
          name="description"
          content="Official profile of Mohammed Shafeeque Ishwaramangala – tech innovator, speaker, and content creator from Ishwaramangala, Karnataka."
        />
        <meta
          name="keywords"
          content="Mohammed Shafeeque Ishwaramangala, shafeeqshazah, Islamic Media Shazah, Oru Trippoli, tech speaker, Karnataka, public speaker, Flutter developer"
        />
        <meta name="author" content="Mohammed Shafeeque Ishwaramangala" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-[#004d80] to-[#001f3f] text-white p-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Mohammed Shafeeque Ishwaramangala</h1>
          <p className="text-lg mb-6 italic">
            Empowering communities through technology, ethics, and education.
          </p>

          <div className="flex justify-center gap-6 mb-6">
            <a href="https://instagram.com/mohammed_shafeeq_ue" target="_blank" className="hover:underline text-blue-300">Instagram</a>
            <a href="https://www.linkedin.com/in/mohammed-shafeeque-870765195" target="_blank" className="hover:underline text-blue-300">LinkedIn</a>
            <a href="https://x.com/shafeeqshazah" target="_blank" className="hover:underline text-blue-300">X (Twitter)</a>
            <a href="https://www.youtube.com/@IslamicMediaShazah" target="_blank" className="hover:underline text-blue-300">YouTube: Islamic Media Shazah</a>
            <a href="https://www.youtube.com/@OruTrippoli" target="_blank" className="hover:underline text-blue-300">YouTube: Oru Trippoli</a>
          </div>

          <section className="bg-white text-black p-6 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Profile Summary</h2>
            <p className="mb-4">
              Mohammed Shafeeque Ishwaramangala is a forward-thinking individual known for his work in
              software development, robotics systems, and community-focused projects. Based in
              Ishwaramangala, Karnataka, he has gained recognition through his contributions to digital innovation,
              educational outreach, and public speaking at regional events like Bekal Fest 2K24.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Flutter & Firebase App Development</li>
              <li>AI & Machine Learning in Security</li>
              <li>ROS-based Robotic Interfaces</li>
              <li>Full-stack Web & Mobile Apps</li>
            </ul>
            <p className="mb-4">
              He is also actively involved in creating and managing content on YouTube through:<br />
              <strong>Islamic Media Shazah</strong> – for Islamic and cultural speeches<br />
              <strong>Oru Trippoli</strong> – for public events, festival appearances, and travel-based content ("Oru Trippoli" means "A Traveller").
            </p>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <ul className="list-disc list-inside">
              <li>B.Tech in Computer Science – P.A. College of Engineering, under Visvesvaraya Technological University (VTU)</li>
              <li>Diploma – Government Polytechnic Bantwal</li>
              <li>Schooling – Khaleel Salah English Medium School & Al Madeena English Medium School, Manjanady</li>
            </ul>
          </section>

          <footer className="mt-10 text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Mohammed Shafeeque Ishwaramangala. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}
