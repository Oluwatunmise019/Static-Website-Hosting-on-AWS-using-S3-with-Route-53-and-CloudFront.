# 🌐 Cloud Portfolio Website  
**Static Website Hosting on AWS (S3 + Route 53 + CloudFront)**

This project showcases my **personal cloud portfolio website** deployed as a **production-style static website** on AWS using **Amazon S3**, **CloudFront**, and **Route 53**, with HTTPS enabled via **AWS Certificate Manager (ACM)**.

The goal of this project is to understand **end-to-end cloud delivery** — from DNS and certificates to CDN caching and secure access.

---

## 🔗 Live Website
👉 **https://asaluoluwatunmise.com**

---

## 🧩 Project Objective

The goal of this project was to:

- Deploy a static portfolio website using cloud infrastructure
- Understand how DNS providers interact with cloud-hosted services
- Learn how to troubleshoot real-world hosting issues (404s, asset paths)
- Build a scalable foundation for future cloud projects

This is my **first cloud portfolio project**, designed to evolve as I gain more experience.

---

## 🏗 Architecture Overview

### Current Architecture

**Flow:**
User → Route 53 (DNS) → CloudFront (CDN + HTTPS) → S3 (Static Website)

<img width="761" height="322" alt="architecture-diagram drawio" src="https://github.com/user-attachments/assets/fa196af9-90b7-49c2-89a3-c45727e75a8f" />

---

## ⚙️ Technologies Used

- **Amazon S3** – Static website hosting
- **Amazon CloudFront** – CDN and HTTPS delivery
- **AWS Certificate Manager (ACM)** – SSL/TLS certificate
- **Amazon Route 53** – DNS and domain routing
- **GitHub** (version control & documentation)

---

## 🛠 Step-by-Step Implementation

### Step 1: Create S3 Bucket

1. Log in to your **AWS Management Console**.
2. Navigate to **S3** and click **Create bucket**.
3. Set a **unique bucket name** and select the **region**.
4. Uncheck **Block all public access** (to allow public access for website hosting).
5. Click **Create bucket**.

<img width="960" height="475" alt="s3 Website project 1" src="https://github.com/user-attachments/assets/613cc1fc-7d39-4803-838f-f043d8656997" />

---

### Step 2: Enable Static Website Hosting

1. Open the created S3 bucket.
2. Navigated to **Properties**.
3. Enabled **Static website hosting**.
4. Set:
   - Index document: `index.html`
   - Error document: `error.html` (optional)

<img width="960" height="472" alt="s3 Website project 2" src="https://github.com/user-attachments/assets/e3c244af-72a8-4681-932d-a41a89222696" />

---

### Step 3: Configure Bucket Policy for Public Access

A bucket policy was added to allow public read access to website files:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::asaluoluwatunmise.com/*"
        }
    ]
}
```

---

### Step 4: Upload Website Files

Uploaded the following files to the bucket:

- `index.html`
- `style.css`
- `script.js`
- `assets/` folder (images, badges, icons)
  
<img width="960" height="473" alt="s3 website project 1 1" src="https://github.com/user-attachments/assets/00c05835-1819-40e7-af0d-115b0b420df6" />

---

### Step 5: Configure CloudFront Distribution

1. Navigate to CloudFront → Create Distribution.
2. Choose Web delivery method.
3. Set Origin Domain Name to your S3 bucket.
4. Set Default Root Object: index.html.
5. Under SSL/TLS Settings, choose Custom SSL Certificate from ACM.
6. Create the distribution and wait for deployment.  

<img width="960" height="476" alt="s3 website project 1 3" src="https://github.com/user-attachments/assets/0ecfb0c2-aaa5-4d13-84e8-92ada22dadf8" />

---

### Step 6: Setup Domain on Route 53

1. Go to Route 53 → Hosted Zones → Create Hosted Zone.
2. Add your domain name.
3. Create record sets:
   - Type: A – IPv4 address
   - Alias: Yes
   - Alias target: CloudFront distribution
4. Wait for DNS propagation. 

<img width="956" height="473" alt="s3 website project 1 4" src="https://github.com/user-attachments/assets/d1ea4b9d-acea-414d-8c89-0de67f558fd5" />

---

### Step 7: Test Website

1. Open your browser and navigate to your custom domain.
2. Ensure the website loads correctly over HTTPS.
3. Test all links (LinkedIn, GitHub, Credly badges).
   
<img width="960" height="512" alt="website portfolio" src="https://github.com/user-attachments/assets/2dc9aba0-f315-47bb-ae56-cae7c79c5eb5" />

---

### Step 8: Add AWS Certification Badges

1. Obtain your AWS certification badges from Credly.
2. Add badges as clickable images linking to the credentials.
3. Place them on the portfolio’s Certifications section.

---

### 🐞 Challenges & Debugging Experience

#### Issue 1: CloudFront Caching
- **Symptom:** Updates to website files were not visible immediately.  
- **Root Cause:** Relative asset paths combined with CloudFront caching caused outdated objects to be served. 
- **Action Taken:** Replaced relative paths with **absolute S3 object URLs** for all images and static assets.  
- **Result:** Updates reflected immediately across all devices and browsers.  
- **Lesson Learned:** Understanding CDN caching behavior and asset path resolution is crucial for reliable website deployment.

#### Issue 2: Incorrect File Naming
- **Symptom:** Some images failed to load in the browser.  
- **Root Cause:** Files were accidentally uploaded as `.png.png`, causing broken links.  
- **Solution:** Corrected file extensions and verified object names in S3.  
- **Lesson Learned:** Always validate file extensions and object names before deployment.

---

### 🚀 Future Improvements

- Add **portfolio project pages** dynamically 
- Implement **responsive mobile design** improvements
- Automate deployment via**CI/CD** pipeline 
- Include analytics and visitor tracking  
  
---

### 🧠 Key Takeaways

This project provided real-world experience with:

- Cloud storage and static hosting  
- DNS management using Amazon Route 53  
- Debugging common cloud deployment issues  
- Designing scalable cloud-based portfolio infrastructure

---

### 📌 Author

**Asalu Oluwatunmise**  
Aspiring Cloud Engineer  

- Portfolio:  https://asaluoluwatunmise.com
- GitHub: https://github.com/Oluwatunmise019  
- LinkedIn: https://linkedin.com/in/asalu-oluwatunmise-70b8962a8
