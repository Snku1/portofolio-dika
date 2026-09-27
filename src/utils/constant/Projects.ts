import { IProject } from '@/utils/interface/Project'

export const projects: IProject[] = [
  // ============ WEB ============
  {
    title: 'Ngemplak Kalangan Village Website',
    image: '/ngemplak-kalangan.png',
    description:
      'A website for Ngemplak Kalangan Village that helps the village government to manage village information and provide services to the community.',
    type: 'web',
    tech: ['PHP', 'Laravel', 'Javascript', 'Vue.js', 'Tailwind CSS', 'MySQL'],
    demo: 'https://ngemplakkalangan.web.id',
    repo: 'https://github.com/Snku1/ngemplak-kalangan-web',
  },
  {
    title: 'Laboratory Inventory Information System — DPTEI UNY',
    image: '/dptei-lab.png',
    description:
      'A system to manage laboratory data, item inventory, item borrowing, receiving, returning, and stock opname. Supports multiple laboratories, with separate data for each lab type.',
    type: 'web',
    tech: ['PHP', 'Laravel', 'Javascript', 'Blade', 'Tailwind CSS', 'MySQL'],
    demo: 'none',
    repo: 'https://github.com/Snku1/Sistem-Pendataan-Lab-UNY',
  },
  {
    title: 'Book Grant UNY API — Reviewer Module',
    image: '/hibah-buku.png',
    description:
      'A reviewer module within the UNY book grant application API, used to review and evaluate book grant submissions.',
    type: 'web',
    tech: ['PHP', 'Laravel', 'RESTful API', 'MySQL'],
    demo: 'none',
    repo: 'https://github.com/RizalHaryaputra/book-grant-api/tree/module-3',
  },
  {
    title: 'Offline Library Management Information System',
    image: '/sim-perpustakaan.png',
    description:
      'A system to help libraries manage book data, member data, borrowing and returning transactions, and activity reports. Integrates borrowing (TPS), administrative documents (OAS), knowledge (KMS), and managerial reports (MIS) into one digital platform, replacing manual ledgers and Excel.',
    type: 'web',
    tech: ['PHP', 'Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
    demo: 'none',
    repo: 'https://github.com/Snku1/Sistem-Manajemen-Perpustakaan-MSI',
  },
  {
    title: 'Decision Support System — Best Sacrificial Cow Selection (TOPSIS & SAW)',
    image: '/spk.png',
    description:
      'A web-based decision support system to help users (sacrifice committees or buyers) choose the best cow based on multiple important criteria. Uses multi-criteria decision-making methods SAW and TOPSIS to recommend the most optimal cow for sacrifice.',
    type: 'web',
    tech: ['PHP', 'HTML/CSS', 'JavaScript', 'MySQL'],
    demo: 'none',
    repo: 'https://github.com/Snku1/Tugas-Akhir-SPK',
  },
  {
    title: 'BetBlock Chrome Extension',
    image: '/betblock.png',
    description:
      'A Chrome extension that blocks gambling content and advertisements on piracy websites, competed in Pekan IT UNSIKA.',
    type: 'web',
    tech: ['JavaScript', 'HTML/CSS', 'Manifest V3'],
    demo: 'none',
    repo: 'https://github.com/Snku1/BetBlock',
  },
  {
    title: 'PodMatch — Mood-Based Podcast Recommender',
    image: '/podmatch.png',
    description:
      'A Flask-based web app that analyzes user mood from text and recommends podcasts matching that mood. Search history is stored locally so users can revisit previous mood analysis and podcast recommendations.',
    type: 'ml',
    tech: ['Python', 'Flask', 'HTML/CSS', 'JavaScript'],
    demo: 'none',
    repo: 'https://github.com/Snku1/PodMatch',
  },
  {
    title: 'RAG-based Chatbot for Conversion Program Information Service (TI UNY)',
    image: '/chatbotrag.png',
    description:
      'A chatbot that provides information services regarding the conversion program for the Information Technology Study Program at Universitas Negeri Yogyakarta.',
    type: 'chatbot  ',
    tech: ['RAG', 'n8n', 'Telegram Bot API', 'Pinecone', 'Open AI API', 'Cohere API', 'Google Drive'],
    demo: 'none',
    repo: 'https://github.com/Snku1/chatbot-kampus-berdampak-ti-uny',
  },
  {
    title: 'House Price Prediction in Yogyakarta (Regression Algorithm Comparison)',
    image: '/prediksi-rumah.png',
    description:
      'A machine learning research project that compares three algorithms — Linear Regression, Decision Tree, and Random Forest — to determine the most accurate model for predicting house prices in Yogyakarta. Prior studies on Yogyakarta house price prediction are limited in comprehensively comparing multiple algorithms, so this research fills that gap by providing an in-depth performance comparison.',
    type: 'ml',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook'],
    demo: 'none',
    repo: 'https://github.com/Averroes098/R-Forest-Yogya',
  },

  // ============ MOBILE ============
  {
    title: 'TaskMate — Student Task Manager',
    image: '/taskmate.png',
    description:
      'An Android-based mobile application that helps students manage their task list. Users can add tasks, view task details, edit, delete, and mark tasks as completed, with in-app popup notifications.',
    type: 'mobile',
    tech: ['Kotlin', 'Android Studio', 'SQLite'],
    demo: 'none',
    repo: 'https://github.com/Snku1/TaskMate',
  },

  // ============ IOT ============
  {
    title: 'IoT CCTV with ESP32-CAM & Face Recognition',
    image: '/cctv.png',
    description:
      'An IoT-based CCTV system built with ESP32-CAM featuring face recognition, automatic notifications, warning sounds, and Telegram bot integration for real-time monitoring.',
    type: 'iot',
    tech: ['ESP32-CAM', 'ESP32-CAM Programmer CH340 Develop Board', 'Arduino IDE', 'Python', 'Telegram Bot API'],
    demo: 'none',
    repo: 'https://github.com/Snku1/cctv-esp32-cam',
  },

  // ============ DESKTOP ============
  {
    title: 'Library Application (Visual Basic)',
    image: '/perpustakaan-vb.png',
    description:
      'A desktop-based library application built with Visual Basic to manage book data and library transactions.',
    type: 'desktop',
    tech: ['Visual Basic', 'Java', 'MySQL'],
    demo: 'none',
    repo: 'https://github.com/Snku1/Aplikasi-Perpustakaan-VB',
  },
]