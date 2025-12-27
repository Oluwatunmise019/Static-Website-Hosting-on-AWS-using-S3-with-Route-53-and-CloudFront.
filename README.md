# 🌐 Static Website Hosting on AWS using S3 with Route 53 & CloudFront. 

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

<img width="761" height="322" alt="architecture-diagram drawio" src="https://github.com/user-attachments/assets/bb32b5e7-5717-46f4-83d8-adaa12376cfd" />

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
   
<img width="960" height="475" alt="s3 Website project 1" src="https://github.com/user-attachments/assets/b4d8b95c-0fce-408e-87c4-adfac088177d" />

---

### Step 2: Enable Static Website Hosting

1. Open the created S3 bucket.
2. Navigated to **Properties**.
3. Enabled **Static website hosting**.
4. Set:
   - Index document: `index.html`
   - Error document: `error.html` (optional)

<img width="960" height="473" alt="s3 Website project 7" src="https://github.com/user-attachments/assets/b5bea93a-5968-4d9d-9e27-b79e71f77929" />

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

<img width="960" height="473" alt="s3 website project 1 1" src="https://github.com/user-attachments/assets/9da28874-c2b0-4fe2-a561-fc1184a4a9fb" />

---

### Step 5: Configure CloudFront Distribution

1. Navigate to CloudFront → Create Distribution.
2. Choose Web delivery method.
3. Set Origin Domain Name to your S3 bucket.
4. Set Default Root Object: index.html.
5. Under SSL/TLS Settings, choose Custom SSL Certificate from ACM.
6. Create the distribution and wait for deployment.  

<img width="958" height="473" alt="s3 website project 1 5" src="https://github.com/user-attachments/assets/73cc4065-9fe4-4ecb-8334-4c8eba4bf3fb" />

---

### Step 6: Setup Domain on Route 53

1. Go to Route 53 → Hosted Zones → Create Hosted Zone.
2. Add your domain name.
3. Create record sets:
   - Type: A – IPv4 address
   - Alias: Yes
   - Alias target: CloudFront distribution
4. Wait for DNS propagation. 

<img width="956" height="473" alt="s3 website project 1 4" src="https://github.com/user-attachments/assets/647dd230-7d00-4b17-9d99-505885535137" />


---

### Step 7: Test Website

1. Open your browser and navigate to your custom domain.
2. Ensure the website loads correctly over HTTPS.
3. Test all links (LinkedIn, GitHub, Credly badges). 

<img width="960" height="479" alt="portfolio" src="https://github.com/user-attachments/assets/d1fb542a-df15-4b01-9172-c0fc43fc3124" />

---

### Step 8: Add AWS Certification Badges

1. Obtain your AWS certification badges from Credly.
2. Add badges as clickable images linking to the credentials.
3. Place them on the portfolio’s Certifications section.

---

### 🐞 Challenges & Debugging Experience

#### Issue 1: CloudFront Caching
- **Symptom:** Updates to website files were not visible immediately after deployment.  
- **Root Cause:** CloudFront cached previously served objects and continued delivering them even after files were updated in the S3 origin. 
- **Action Taken:** Performed a CloudFront cache invalidation (/*) to force CloudFront to fetch the latest objects from the S3 origin. 
- **Result:** Updated content was immediately visible across browsers and devices.
- **Lesson Learned:** CDNs aggressively cache content by design; understanding cache invalidation is essential for managing updates in production environments.

#### Issue 2: Incorrect File Naming
- **Symptom:** Some images failed to load in the browser.  
- **Root Cause:** Files were accidentally uploaded as `.png.png`, causing broken links.  
- **Solution:** Corrected file extensions and verified object names in S3.  
- **Lesson Learned:** Always validate file extensions and object names before deployment.

---

### 🚀 Future Improvements

- Add **portfolio project pages** dynamically 
- Implement **responsive mobile design** improvements
- Automate deployment via **CI/CD** pipeline 
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
