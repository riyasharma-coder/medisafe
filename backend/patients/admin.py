from django.contrib import admin
from .models import Patient

@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ('patient_id', 'name', 'phone', 'blood_group', 'created_at')
    search_fields = ('name', 'aadhar', 'phone', 'patient_id')
    list_filter = ('blood_group', 'created_at')


# Register your models here.
