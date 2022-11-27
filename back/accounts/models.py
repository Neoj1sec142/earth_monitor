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
    
class Investment(models.Model):
    title = models.CharField(max_length=100, null=True)
    tag = models.CharField(max_length=20, null=True)
    description = models.TextField(default='')
    in_price = models.CharField(max_length=100, null=True)
    in_amt = models.CharField(max_length=100, null=True)
    pull_min = models.CharField(max_length=100, null=True)
    pull_cap = models.CharField(max_length=100, null=True)
    is_complete = models.BooleanField(default=False)
    out_price = models.CharField(max_length=100, null=True)
    out_amt = models.CharField(max_length=100, null=True)
    def __str__(self):
        return self.tag
    