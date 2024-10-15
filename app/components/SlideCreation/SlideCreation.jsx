import React from "react";
import Image from "next/image";
import styles from "@/styles/SlideCreation/SlideCreation.module.css";
import { IoMdAttach } from "react-icons/io";
import Saperator from "../voicehoverwebsitedesign/Saperator";
import { VscSparkle } from "react-icons/vsc";
import templateImg_1 from "@/public/SlideCreationImg/templateImg.png";
import CaseStudies from "@/public/SlideCreationImg/CaseStudies.png";
import ContractsandAgreements from "@/public/SlideCreationImg/ContractsandAgreements.png";
import InvoicesandReceipts from "@/public/SlideCreationImg/InvoicesandReceipts.png";
import ResumesandCVs from "@/public/SlideCreationImg/ResumesandCVs.png";
import element from "@/public/SlideCreationImg/elements.png";

const SlideCreation = () => {
  return (
    <>
      <div className={styles.slidecreationhead}>
        <div>
          <div className={styles.slidecreationheadContent}>
            {/* Content of the header, like title, image, or other elements */}
            <div className={styles.gradientTextContainer}>
              <p className={styles.gradientText}>
                Design engaging presentations <br /> effortlessly with AI
              </p>
            </div>
            <p className={styles.secondpara}>
              Quickly generate slides that captivate and convey your message
              effectively.
            </p>
          </div>
          <div className={styles.inputcontainer}>
            <textarea
              className={styles.inputbox}
              placeholder="Describe what you would like to make"
            />

            <IoMdAttach className={styles.attachicon} />
          </div>
          <Saperator
  text="Sample Prompt"
  style={{
    width: "825px",
    height: "13px",
    gap: "0px",
    opacity: "0", // Corrected opacity value (ranges from 0 to 1)
    fontSize: "11px", // Corrected font size
    fontWeight: "400",
    lineHeight: "13.31px", // Corrected line height
    letterSpacing: "-0.02em", // Corrected letter spacing
    textAlign: "center", // Corrected text alignment
    
  }}
/>


          <div className={styles.container}>
            <div className={styles.containerBox}>
              <Image src={element} />
              <p>
                A modern slide highlighting the company's mission, vision, and
                core values, featuring clean icons and bold headings.
              </p>
            </div>
            <div className={styles.containerBox}>
              <Image src={element} />
              <p>
                A slide showcasing the key features of the latest product, using
                sleek visuals and simple infographics.
              </p>
            </div>
            <div className={styles.containerBox}>
              <Image src={element} />
              <p>
                A professional slide introducing team members with names, roles,
                and photos in a structured layout.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bottomContent}>
          {/* Additional content, such as buttons or other elements */}

          <div className={styles.templateAllContent}>
            <div className={styles.bottomTemplates}>
              <div className={styles.TemplatesContent}>
                <h2>Templates</h2>
                <p>
                  Find ready-to-use templates for any document—quick and easy.
                </p>
              </div>
              <button className={styles.button}>See all templates</button>
            </div>
            {/* import Image from 'next/image'; */}

            <div className={styles.templeteImg}>
              <div className={styles.templeteImgBox}>
                <button className={styles.addButton}>
                  <span className={styles.plusIcon}>+</span>
                </button>

                <p>New Document</p>
              </div>
              <div className={styles.templeteImgBox}>
                <Image
                  src={templateImg_1}
                  alt="Business Proposals"
                  width={120}
                  height={72}
                />
                <p>Business Proposals</p>
              </div>
              <div className={styles.templeteImgBox}>
                <Image
                  src={ContractsandAgreements}
                  alt="Template 1"
                  width={120}
                  height={72}
                />
                <p>Contracts and Agreements</p>
              </div>
              <div className={styles.templeteImgBox}>
                <Image
                  src={ResumesandCVs}
                  alt="Template 1"
                  width={120}
                  height={72}
                />
                <p>Resumes and CVs</p>
              </div>
              <div className={styles.templeteImgBox}>
                <Image
                  src={InvoicesandReceipts}
                  alt="Template 1"
                  width={120}
                  height={72}
                />
                <p>Invoices and Receipts</p>
              </div>
              <div className={styles.templeteImgBox}>
                <Image
                  src={CaseStudies}
                  alt="Template 1"
                  width={120}
                  height={72}
                />
                <p>Case Studies</p>
              </div>
            </div>
          </div>
          <div className={styles.customline}></div>

          <div className={styles.templateAllContent}>
            <div className={styles.bottomTemplates}>
              <div className={styles.TemplatesContent}>
                <h2>Recent Documents</h2>
                <p>Instantly view and edit your latest documents</p>
              </div>
              <button className={styles.button}>See all templates</button>
            </div>
            {/* import Image from 'next/image'; */}

            <div className={styles.templeteImg}>
              <div className={styles.templeteImgBox}>
                <Image
                  src={InvoicesandReceipts}
                  alt="Template 1"
                  width={120}
                  height={72}
                />
                <p>Q3 Sales Report 2024</p>
              </div>
              <div className={styles.templeteImgBox}>
                <Image
                  src={InvoicesandReceipts}
                  alt="Template 1"
                  width={120}
                  height={72}
                />
                <p>Marketing Strategy - Final Draft</p>
              </div>
              <div className={styles.templeteImgBox}>
                <Image
                  src={InvoicesandReceipts}
                  alt="Template 1"
                  width={120}
                  height={72}
                />
                <p>Client Contract - ABC Corp</p>
              </div>
              <div className={styles.templeteImgBox}>
                <Image
                  src={InvoicesandReceipts}
                  alt="Template 1"
                  width={120}
                  height={72}
                />
                <p>Team Meeting Notes - October 2024</p>
              </div>
              <div className={styles.templeteImgBox}>
                <Image
                  src={InvoicesandReceipts}
                  alt="Template 1"
                  width={120}
                  height={72}
                />
                <p>Budget Plan - Annual 2025</p>
              </div>
              <div className={styles.templeteImgBox}>
                <Image
                  src={InvoicesandReceipts}
                  alt="Template 1"
                  width={120}
                  height={72}
                />
                <p>Product Launch Timeline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideCreation;
