import { Component, OnInit } from '@angular/core';
import { BusinesssPlan } from '../../models/businessPlan';
import { BusinessPlanService } from '../business-plan.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'business-plan-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-plan-table.component.html',
  styleUrl: './business-plan-table.component.css'
})
export class BusinessPlanTableComponent {

  businessPlans: BusinesssPlan[] = [];

  constructor(private businessPlanService: BusinessPlanService, private router: Router) {}

  ngOnInit() {
    this.businessPlanService.getBusinessPlan().subscribe((data: BusinesssPlan[]) => {
      this.businessPlans = data;
      console.log(data);
    });
  }

  deleteBusinessPlan(planId: number): void {
    this.businessPlanService.deleteBusinessPlan(planId).subscribe({
      next: (response) => {
        this.businessPlans = this.businessPlans.filter(plan => plan.planId !== planId);
      },
      error: (err) => {
        console.error('Error deleting business plan:', err);
      }
    });
  }

  editBusinessPlan(planId: number): void {
    this.router.navigate(['/edit', planId]);
  }

  downloadBusinessPlan(plan: BusinesssPlan): void {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height; // Height of the page
    const margin = 10; // Top and bottom margin
    let y = margin; // Starting y-coordinate
  
    // Add content to the PDF
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold'); // Bold font for the title
    doc.text('Business Plan', 10, y);
    y += 10; // Increment y-coordinate for the next line
  
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal'); // Normal font for content
    doc.text(`Plan ID: ${plan.planId}`, 10, y);
    y += 10;
  
    doc.text(`Plan Name: ${plan.planName}`, 10, y);
    y += 10;
  
    // Helper function to add a section dynamically
    const addSection = (title: string, content: string) => {
      // Add section title
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(title, 10, y);
      y += 10;
  
      // Add section content
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      const lines = doc.splitTextToSize(content, 180); // Split text into multiple lines
  
      lines.forEach((line: string | string[]) => {
        if (y + 10 > pageHeight - margin) {
          // If the content exceeds the page height, add a new page
          doc.addPage();
          y = margin; // Reset y-coordinate for the new page
        }
        doc.text(line, 10, y);
        y += 10; // Increment y for the next line
      });
  
      // Add a horizontal line after the section
      if (y + 10 > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.setDrawColor(0); // Black color for the line
      doc.line(10, y, 200, y); // Horizontal line
      y += 10; // Add space after the line
    };
  
    // Add sections dynamically
    addSection('Plan Description:', plan.planDescription);
    addSection('Executive Summary:', plan.executiveSummary);
    addSection('Company Description:', plan.companyDescription);
    addSection('Market Research:', plan.marketResearch);
    addSection('Service Line:', plan.serviceLine);
    addSection('Marketing and Sales:', plan.marketingAndSales);
  
    // Save the PDF
    doc.save(`${plan.planName}.pdf`);
  }
  
}