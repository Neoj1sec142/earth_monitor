from rest_framework import serializers
from .models import Account, Transaction


class AccountSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Account
        fields = '__all__'
        ordering = ('-date_created')
        
class TransactionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Transaction
        fields = '__all__'
        ordering = ('-date_created')