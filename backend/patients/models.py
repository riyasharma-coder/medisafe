from django.db import models

class Patient(models.Model):
    # unique patient id (like PAT-2025-01)
    patient_id = models.CharField(max_length=20, unique=True)

    # basic details
    name = models.CharField(max_length=100)
    aadhar = models.CharField(max_length=12, unique=True)   # 12-digit Aadhar
    phone = models.CharField(max_length=15)

    # medical + extra details
    emergency_contact = models.CharField(max_length=15, blank=True, null=True)
    blood_group = models.CharField(max_length=5, blank=True, null=True)
    allergies = models.TextField(blank=True, null=True)
    insurance_details = models.TextField(blank=True, null=True)

    # auto timestamps
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.patient_id})"


# Create your models here.
