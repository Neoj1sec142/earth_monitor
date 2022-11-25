from .views import *
from django.urls import path

urlpatterns = [
    path('accounts/', AccountList.as_view(), name='account_list'),
    path('accounts/<int:pk>/', AccountDetail.as_view(), name='account_detail'),
    path('transactions/', TransactionList.as_view(), name='transaction_list'),
    path('transactions/<int:pk>/', TransactionDetail.as_view(), name='transaction_detail'),    
]
