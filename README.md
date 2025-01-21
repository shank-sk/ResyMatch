# ResyMatch
**ResyMatch is a Flask-based web application designed to simplify the recruitment process by matching job descriptions with resumes. By leveraging Natural Language Processing (NLP) techniques such as TF-IDF vectorization and cosine similarity, ResyMatch helps recruiters identify the most relevant candidates quickly and effectively.**
---
# Features
- **User Authentication:** Secure login, logout, and registration using Flask-Login and Flask-WTF.
- **Resume Matching:** Upload multiple resumes in PDF, DOCX, or TXT formats to compare them against a job description.
- **Similarity Scoring:** Uses TF-IDF and cosine similarity to rank resumes based on relevance.
- **Dashboard:** Interactive dashboard for recruiters to manage uploads and view results.
- **Responsive Design:** User-friendly interface with pages for home, contact, about, and login/register.
- **File Handling:** Supports safe upload and storage of resumes.
---
# Technologies Used
- **Backend:** Flask, Flask-SQLAlchemy, Flask-Bcrypt, Flask-Login, Flask-WTF
- **Frontend:** HTML, CSS, Jinja2 Templates
- **Database:** SQLite
- **NLP Libraries:** Scikit-learn (TF-IDF Vectorization, Cosine Similarity)
- **File Handling:** PyPDF2, docx2txt
---
# Installation
## Prerequisites
- Python 3.x
- Pip (Python package manager)
## Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/shank-sk/ResyMatch.git
    cd ResyMatch
2. **Create a virtual environment:**
   ``` bash
     python -m venv venv
     source venv/bin/activate
3. **Install dependencies:**
   ``` bash
     pip install -r requirements.txt
4. **Set up the database:**
   ``` bash
   `python
    >>> from app import db
    >>> db.create_all()
    >>> exit()
5. **Create the upload folder:**
   ``` bash
     mkdir uploads
6. **Run the application:**
   ``` bash
     python app.py
7. **Access the application in your browser at:**
   ``` bash
     http://127.0.0.1:5000
---
# Usage
## Step 1: Register/Login
- Create an account or log in with existing credentials.
## Step 2: Upload Resumes and Provide Job Description
- Navigate to the Matcher page.
- Upload resumes in supported formats and input the job description.
## Step 3: View Matching Results
- Get a ranked list of the top 5 matching resumes with similarity scores.
---
# Future Enhancements
- Add support for real-time analytics and insights.
- Integrate advanced NLP models for enhanced matching.
- Expand file format support.
- Provide recruiter and candidate dashboards with detailed reports.
---
# Contributing
**Contributions are welcome! Feel free to fork the repository and submit a pull request with your improvements.**
---

