from rest_framework import generics, permissions
from .models import Account, Transaction
from .serializers import AccountSerializer, TransactionSerializer


class AccountList(generics.ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = (permissions.AllowAny, )
    
    class Meta:
        model = Account
        fields = ('__all__')
        ordering = ('-date_created')
        
class AccountDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    
    
class TransactionList(generics.ListCreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = (permissions.AllowAny, )
    
    class Meta:
        model = Transaction
        fields = ('__all__')
        ordering = ('-date_created')
        
class TransactionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer