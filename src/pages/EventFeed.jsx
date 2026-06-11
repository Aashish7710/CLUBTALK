import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import EventCard from '../components/EventCard';
import { useNotification } from '../context/NotificationContext';
import { Link } from 'react-router-dom';
import EventCardSkeleton from '../components/skeletons/EventCardSkeleton';
import { Skeleton } from '../components/ui/Skeleton';

const EventFeed = ({ limit, hideHeader = false, showFilters = false, onlyActive = false }) => {
  const { showNotification } = useNotification();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [filterClub, setFilterClub] = useState('ALL');
  const [filterMonth, setFilterMonth] = useState('ALL');
  const [filterYear, setFilterYear] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

