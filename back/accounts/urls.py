from .views import *
from django.urls import path

urlpatterns = [
    path('accounts/', AccountList.as_view(), name='account_list'),
    path('accounts/<int:pk>/', AccountDetail.as_view(), name='account_detail'),
    path('transaction/', TransactionList.as_view(), name='transaction_list'),
    path('transaction/<int:pk>/', TransactionDetail.as_view(), name='transaction_detail'),    
]
