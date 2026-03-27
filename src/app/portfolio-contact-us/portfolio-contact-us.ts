import { CommonModule } from '@angular/common';
import { Component, inject, signal, computed } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

// Angular Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-portfolio-contact-us',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './portfolio-contact-us.html',
  styleUrl: './portfolio-contact-us.css',
})
export class PortfolioContactUs {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);
  private _snackBar = inject(MatSnackBar);

  // Signal for loading state
  isLoading = signal(false);
  private apiUrl = 'https://sharmi-backend-hub.onrender.com';
  // Reactive Form Definition
  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  // Signal to track form value changes
  formValue = toSignal(this.contactForm.valueChanges, { 
    initialValue: this.contactForm.value 
  });

  // Computed signal for a dynamic greeting
  dynamicGreeting = computed(() => {
    const name = this.formValue()?.name;
    return name ? `Hi ${name}, let's talk!` : "Let's Build Something Great Together";
  });

  onSubmit() {
    if (this.contactForm.valid && !this.isLoading()) {
      this.isLoading.set(true);
      
      const payload = {
        ...this.contactForm.value,
        mobile: '+91' + this.contactForm.value.mobile // Prepends country code for backend
      };

      this.http.post(this.apiUrl + '/portfolio-contact', payload).subscribe({
        next: () => {
          this.openSnackBar('Message sent successfully!', 'Close');
          this.contactForm.reset();
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Submission Error:', err);
          this.openSnackBar('Error sending message. Please try again.', 'Close');
          this.isLoading.set(false);
        }
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 4000 });
  }

  openWhatsApp() {
    const url = `https://wa.me/919791104985?text=Hi Sharmila, I'd like to discuss a project.`;
    window.open(url, '_blank');
  }
}