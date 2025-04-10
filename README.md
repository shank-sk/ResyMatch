# ResyMatch

<div align="center">

**ResyMatch is a Flask-based web application designed to simplify the recruitment process by matching job descriptions with resumes. By leveraging Natural Language Processing (NLP) techniques such as TF-IDF vectorization and cosine similarity, ResyMatch helps recruiters identify the most relevant candidates quickly and effectively.**

</div>

## 📋 Features

- **User Authentication:** Secure login, logout, and registration using Flask-Login and Flask-WTF
- **Resume Matching:** Upload multiple resumes in PDF, DOCX, or TXT formats to compare them against a job description
- **Similarity Scoring:** Uses TF-IDF and cosine similarity to rank resumes based on relevance
- **Dashboard:** Interactive dashboard for recruiters to manage uploads and view results
- **Responsive Design:** User-friendly interface with dark/light mode toggle
- **File Handling:** Supports safe upload and storage of resumes
- **Download Capability:** Easily download top matching resumes

## 🛠️ Technologies Used

- **Backend:** Flask, Flask-SQLAlchemy, Flask-Bcrypt, Flask-Login, Flask-WTF
- **Frontend:** HTML, CSS, JavaScript, Bootstrap, Font Awesome
- **Database:** SQLite
- **NLP Libraries:** Scikit-learn (TF-IDF Vectorization, Cosine Similarity)
- **File Handling:** PyPDF2, docx2txt

## 🚀 Installation

### Prerequisites

- Python 3.x
- Pip (Python package manager)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shank-sk/ResyMatch.git
   cd ResyMatch
2. **Create a virtual environment:**
    ``` bash
    python -m venv venv
    # On Windows
    .\venv\Scripts\activate

    # On macOS/Linux
    source venv/bin/activate
3. **Install dependencies:**
    ``` bash
    pip install -r requirements.txt
4. **Set up the database:**
   ``` bash
   >>> from app import app, db
    >>> with app.app_context():
    >>>     db.create_all()
    >>> exit()
5. **Create the upload folder:**
   ``` bash
   mkdir uploads
6. **Run the application:**
   ``` bash
   python main.py
7. **Access the application in your browser at:**
   ``` bash
   http://127.0.0.1:5000

## 📖 Usage

### Step 1: Register/Login  
🔐 Create an account or log in with existing credentials.

### Step 2: Upload Resumes and Provide Job Description  
📄 Navigate to the **Matcher** page.  
📂 Upload resumes in supported formats (**PDF, DOCX, TXT**).  
📝 Input the job description.  
⚙️ Click **"Match Resumes"** to process.

### Step 3: View Matching Results  
📊 See the ranked list of the top matching resumes with **similarity scores**.  
📈 View detailed results with **visual charts**.  
⬇️ Download any resume directly from the results page.

---

## 🔮 Future Enhancements

- 📡 Real-time analytics and insights  
- 🤖 Advanced NLP models for enhanced matching  
- 🗃️ Expanded file format support  
- 📊 Recruiter & candidate dashboards with detailed reports  
- 📬 Email notifications for matching results

---

## 🤝 Contributing

Contributions are welcome! Please follow the steps below to contribute:
   ---bash
      # 1. Fork the repository
      # 2. Create your feature branch
      git checkout -b feature/AmazingFeature
      # 3. Commit your changes
      git commit -m "Add some AmazingFeature"
      # 4. Push to the branch
      git push origin feature/AmazingFeature

## 📄 License  
This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.

---

## 👥 Team  
- **Shashank**  
- **Akhil**  
- **Onkar**

---

## 📞 Contact  
For questions or feedback, please feel free to:   
- 🔗 Contact team members directly through their **LinkedIn profiles** listed on the [About](./about) page.

