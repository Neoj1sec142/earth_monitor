from django.db import models

class Account(models.Model):
    title = models.CharField(max_length=100, null=True)
    description = models.TextField(default='')
    balance = models.FloatField(default=0.1)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.title


class Transaction(models.Model):
    description = models.TextField(default='')
    withdrawl = models.BooleanField(default=False)
    amount = models.FloatField(default=0.0)
    location = models.TextField(default='Where?')
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.location[:10]