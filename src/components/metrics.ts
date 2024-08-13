export const metrics = `
# HELP go_gc_duration_seconds A summary of the pause duration of garbage collection cycles.
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 0.00012275
go_gc_duration_seconds{quantile="0.25"} 0.000137417
go_gc_duration_seconds{quantile="0.5"} 0.00014225
go_gc_duration_seconds{quantile="0.75"} 0.000148458
go_gc_duration_seconds{quantile="1"} 0.000444291
go_gc_duration_seconds_sum 0.339600314
go_gc_duration_seconds_count 2261
# HELP go_goroutines Number of goroutines that currently exist.
# TYPE go_goroutines gauge
go_goroutines 8
# HELP go_info Information about the Go environment.
# TYPE go_info gauge
go_info{version="go1.22.5"} 1
# HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
# TYPE go_memstats_alloc_bytes gauge
go_memstats_alloc_bytes 2.402776e+06
# HELP go_memstats_alloc_bytes_total Total number of bytes allocated, even if freed.
# TYPE go_memstats_alloc_bytes_total counter
go_memstats_alloc_bytes_total 4.575582672e+09
# HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.
# TYPE go_memstats_buck_hash_sys_bytes gauge
go_memstats_buck_hash_sys_bytes 1.702546e+06
# HELP go_memstats_frees_total Total number of frees.
# TYPE go_memstats_frees_total counter
go_memstats_frees_total 6.0851079e+07
# HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata.
# TYPE go_memstats_gc_sys_bytes gauge
go_memstats_gc_sys_bytes 3.233424e+06
# HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and still in use.
# TYPE go_memstats_heap_alloc_bytes gauge
go_memstats_heap_alloc_bytes 2.402776e+06
# HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
# TYPE go_memstats_heap_idle_bytes gauge
go_memstats_heap_idle_bytes 3.923968e+06
# HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
# TYPE go_memstats_heap_inuse_bytes gauge
go_memstats_heap_inuse_bytes 3.956736e+06
# HELP go_memstats_heap_objects Number of allocated objects.
# TYPE go_memstats_heap_objects gauge
go_memstats_heap_objects 24232
# HELP go_memstats_heap_released_bytes Number of heap bytes released to OS.
# TYPE go_memstats_heap_released_bytes gauge
go_memstats_heap_released_bytes 2.064384e+06
# HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system.
# TYPE go_memstats_heap_sys_bytes gauge
go_memstats_heap_sys_bytes 7.880704e+06
# HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
# TYPE go_memstats_last_gc_time_seconds gauge
go_memstats_last_gc_time_seconds 1.7235370546020195e+09
# HELP go_memstats_lookups_total Total number of pointer lookups.
# TYPE go_memstats_lookups_total counter
go_memstats_lookups_total 0
# HELP go_memstats_mallocs_total Total number of mallocs.
# TYPE go_memstats_mallocs_total counter
go_memstats_mallocs_total 6.0875311e+07
# HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures.
# TYPE go_memstats_mcache_inuse_bytes gauge
go_memstats_mcache_inuse_bytes 1200
# HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system.
# TYPE go_memstats_mcache_sys_bytes gauge
go_memstats_mcache_sys_bytes 15600
# HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures.
# TYPE go_memstats_mspan_inuse_bytes gauge
go_memstats_mspan_inuse_bytes 75520
# HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system.
# TYPE go_memstats_mspan_sys_bytes gauge
go_memstats_mspan_sys_bytes 97920
# HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place.
# TYPE go_memstats_next_gc_bytes gauge
go_memstats_next_gc_bytes 5.256144e+06
# HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations.
# TYPE go_memstats_other_sys_bytes gauge
go_memstats_other_sys_bytes 821366
# HELP go_memstats_stack_inuse_bytes Number of bytes in use by the stack allocator.
# TYPE go_memstats_stack_inuse_bytes gauge
go_memstats_stack_inuse_bytes 491520
# HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator.
# TYPE go_memstats_stack_sys_bytes gauge
go_memstats_stack_sys_bytes 491520
# HELP go_memstats_sys_bytes Number of bytes obtained from system.
# TYPE go_memstats_sys_bytes gauge
go_memstats_sys_bytes 1.424308e+07
# HELP go_threads Number of OS threads created.
# TYPE go_threads gauge
go_threads 5
# HELP node_arp_entries ARP entries by device
# TYPE node_arp_entries gauge
node_arp_entries{device="br-lan"} 26
# HELP node_bonding_active Number of active slaves per bonding interface.
# TYPE node_bonding_active gauge
node_bonding_active{master="bhap_mld0"} 2
node_bonding_active{master="bhsta_mld0"} 0
node_bonding_active{master="bond0"} 0
node_bonding_active{master="hostap_mld0"} 0
# HELP node_bonding_slaves Number of configured slaves per bonding interface.
# TYPE node_bonding_slaves gauge
node_bonding_slaves{master="bhap_mld0"} 2
node_bonding_slaves{master="bhsta_mld0"} 0
node_bonding_slaves{master="bond0"} 0
node_bonding_slaves{master="hostap_mld0"} 0
# HELP node_boot_time_seconds Node boot time, in unixtime.
# TYPE node_boot_time_seconds gauge
node_boot_time_seconds 1.723490187e+09
# HELP node_context_switches_total Total number of context switches.
# TYPE node_context_switches_total counter
node_context_switches_total 1.47620549e+08
# HELP node_cpu_frequency_hertz Current CPU thread frequency in hertz.
# TYPE node_cpu_frequency_hertz gauge
node_cpu_frequency_hertz{cpu="0"} 1.1e+09
node_cpu_frequency_hertz{cpu="1"} 1.1e+09
node_cpu_frequency_hertz{cpu="2"} 1.1e+09
node_cpu_frequency_hertz{cpu="3"} 1.1e+09
# HELP node_cpu_frequency_max_hertz Maximum CPU thread frequency in hertz.
# TYPE node_cpu_frequency_max_hertz gauge
node_cpu_frequency_max_hertz{cpu="0"} 1.5e+09
node_cpu_frequency_max_hertz{cpu="1"} 1.5e+09
node_cpu_frequency_max_hertz{cpu="2"} 1.5e+09
node_cpu_frequency_max_hertz{cpu="3"} 1.5e+09
# HELP node_cpu_frequency_min_hertz Minimum CPU thread frequency in hertz.
# TYPE node_cpu_frequency_min_hertz gauge
node_cpu_frequency_min_hertz{cpu="0"} 1.1e+09
node_cpu_frequency_min_hertz{cpu="1"} 1.1e+09
node_cpu_frequency_min_hertz{cpu="2"} 1.1e+09
node_cpu_frequency_min_hertz{cpu="3"} 1.1e+09
# HELP node_cpu_guest_seconds_total Seconds the CPUs spent in guests (VMs) for each mode.
# TYPE node_cpu_guest_seconds_total counter
node_cpu_guest_seconds_total{cpu="0",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="0",mode="user"} 0
node_cpu_guest_seconds_total{cpu="1",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="1",mode="user"} 0
node_cpu_guest_seconds_total{cpu="2",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="2",mode="user"} 0
node_cpu_guest_seconds_total{cpu="3",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="3",mode="user"} 0
# HELP node_cpu_scaling_frequency_hertz Current scaled CPU thread frequency in hertz.
# TYPE node_cpu_scaling_frequency_hertz gauge
node_cpu_scaling_frequency_hertz{cpu="0"} 1.1e+09
node_cpu_scaling_frequency_hertz{cpu="1"} 1.1e+09
node_cpu_scaling_frequency_hertz{cpu="2"} 1.1e+09
node_cpu_scaling_frequency_hertz{cpu="3"} 1.1e+09
# HELP node_cpu_scaling_frequency_max_hertz Maximum scaled CPU thread frequency in hertz.
# TYPE node_cpu_scaling_frequency_max_hertz gauge
node_cpu_scaling_frequency_max_hertz{cpu="0"} 1.5e+09
node_cpu_scaling_frequency_max_hertz{cpu="1"} 1.5e+09
node_cpu_scaling_frequency_max_hertz{cpu="2"} 1.5e+09
node_cpu_scaling_frequency_max_hertz{cpu="3"} 1.5e+09
# HELP node_cpu_scaling_frequency_min_hertz Minimum scaled CPU thread frequency in hertz.
# TYPE node_cpu_scaling_frequency_min_hertz gauge
node_cpu_scaling_frequency_min_hertz{cpu="0"} 1.1e+09
node_cpu_scaling_frequency_min_hertz{cpu="1"} 1.1e+09
node_cpu_scaling_frequency_min_hertz{cpu="2"} 1.1e+09
node_cpu_scaling_frequency_min_hertz{cpu="3"} 1.1e+09
# HELP node_cpu_scaling_governor Current enabled CPU frequency governor.
# TYPE node_cpu_scaling_governor gauge
node_cpu_scaling_governor{cpu="0",governor="conservative"} 0
node_cpu_scaling_governor{cpu="0",governor="ondemand"} 1
node_cpu_scaling_governor{cpu="0",governor="performance"} 0
node_cpu_scaling_governor{cpu="0",governor="powersave"} 0
node_cpu_scaling_governor{cpu="0",governor="userspace"} 0
node_cpu_scaling_governor{cpu="1",governor="conservative"} 0
node_cpu_scaling_governor{cpu="1",governor="ondemand"} 1
node_cpu_scaling_governor{cpu="1",governor="performance"} 0
node_cpu_scaling_governor{cpu="1",governor="powersave"} 0
node_cpu_scaling_governor{cpu="1",governor="userspace"} 0
node_cpu_scaling_governor{cpu="2",governor="conservative"} 0
node_cpu_scaling_governor{cpu="2",governor="ondemand"} 1
node_cpu_scaling_governor{cpu="2",governor="performance"} 0
node_cpu_scaling_governor{cpu="2",governor="powersave"} 0
node_cpu_scaling_governor{cpu="2",governor="userspace"} 0
node_cpu_scaling_governor{cpu="3",governor="conservative"} 0
node_cpu_scaling_governor{cpu="3",governor="ondemand"} 1
node_cpu_scaling_governor{cpu="3",governor="performance"} 0
node_cpu_scaling_governor{cpu="3",governor="powersave"} 0
node_cpu_scaling_governor{cpu="3",governor="userspace"} 0
# HELP node_cpu_seconds_total Seconds the CPUs spent in each mode.
# TYPE node_cpu_seconds_total counter
node_cpu_seconds_total{cpu="0",mode="idle"} 43750.41
node_cpu_seconds_total{cpu="0",mode="iowait"} 19.94
node_cpu_seconds_total{cpu="0",mode="irq"} 401.49
node_cpu_seconds_total{cpu="0",mode="nice"} 0
node_cpu_seconds_total{cpu="0",mode="softirq"} 1372.15
node_cpu_seconds_total{cpu="0",mode="steal"} 0
node_cpu_seconds_total{cpu="0",mode="system"} 636.06
node_cpu_seconds_total{cpu="0",mode="user"} 618.63
node_cpu_seconds_total{cpu="1",mode="idle"} 44761.04
node_cpu_seconds_total{cpu="1",mode="iowait"} 15.57
node_cpu_seconds_total{cpu="1",mode="irq"} 144.38
node_cpu_seconds_total{cpu="1",mode="nice"} 0
node_cpu_seconds_total{cpu="1",mode="softirq"} 272.22
node_cpu_seconds_total{cpu="1",mode="steal"} 0
node_cpu_seconds_total{cpu="1",mode="system"} 744.34
node_cpu_seconds_total{cpu="1",mode="user"} 815.38
node_cpu_seconds_total{cpu="2",mode="idle"} 44232.24
node_cpu_seconds_total{cpu="2",mode="iowait"} 23.92
node_cpu_seconds_total{cpu="2",mode="irq"} 186.48
node_cpu_seconds_total{cpu="2",mode="nice"} 0
node_cpu_seconds_total{cpu="2",mode="softirq"} 680.09
node_cpu_seconds_total{cpu="2",mode="steal"} 0
node_cpu_seconds_total{cpu="2",mode="system"} 793.99
node_cpu_seconds_total{cpu="2",mode="user"} 806.01
node_cpu_seconds_total{cpu="3",mode="idle"} 44964.56
node_cpu_seconds_total{cpu="3",mode="iowait"} 16.67
node_cpu_seconds_total{cpu="3",mode="irq"} 97.93
node_cpu_seconds_total{cpu="3",mode="nice"} 0
node_cpu_seconds_total{cpu="3",mode="softirq"} 90.1
node_cpu_seconds_total{cpu="3",mode="steal"} 0
node_cpu_seconds_total{cpu="3",mode="system"} 763.66
node_cpu_seconds_total{cpu="3",mode="user"} 833.48
# HELP node_disk_discard_time_seconds_total This is the total number of seconds spent by all discards.
# TYPE node_disk_discard_time_seconds_total counter
node_disk_discard_time_seconds_total{device="dm-0"} 0
node_disk_discard_time_seconds_total{device="dm-1"} 0
node_disk_discard_time_seconds_total{device="mtdblock0"} 0
node_disk_discard_time_seconds_total{device="mtdblock1"} 0
node_disk_discard_time_seconds_total{device="mtdblock10"} 0
node_disk_discard_time_seconds_total{device="mtdblock11"} 0
node_disk_discard_time_seconds_total{device="mtdblock12"} 0
node_disk_discard_time_seconds_total{device="mtdblock13"} 0
node_disk_discard_time_seconds_total{device="mtdblock14"} 0
node_disk_discard_time_seconds_total{device="mtdblock15"} 0
node_disk_discard_time_seconds_total{device="mtdblock16"} 0
node_disk_discard_time_seconds_total{device="mtdblock17"} 0
node_disk_discard_time_seconds_total{device="mtdblock18"} 0
node_disk_discard_time_seconds_total{device="mtdblock19"} 0
node_disk_discard_time_seconds_total{device="mtdblock2"} 0
node_disk_discard_time_seconds_total{device="mtdblock20"} 0
node_disk_discard_time_seconds_total{device="mtdblock21"} 0
node_disk_discard_time_seconds_total{device="mtdblock22"} 0
node_disk_discard_time_seconds_total{device="mtdblock23"} 0
node_disk_discard_time_seconds_total{device="mtdblock24"} 0
node_disk_discard_time_seconds_total{device="mtdblock25"} 0
node_disk_discard_time_seconds_total{device="mtdblock26"} 0
node_disk_discard_time_seconds_total{device="mtdblock27"} 0
node_disk_discard_time_seconds_total{device="mtdblock28"} 0
node_disk_discard_time_seconds_total{device="mtdblock29"} 0
node_disk_discard_time_seconds_total{device="mtdblock3"} 0
node_disk_discard_time_seconds_total{device="mtdblock30"} 0
node_disk_discard_time_seconds_total{device="mtdblock31"} 0
node_disk_discard_time_seconds_total{device="mtdblock32"} 0
node_disk_discard_time_seconds_total{device="mtdblock33"} 0
node_disk_discard_time_seconds_total{device="mtdblock34"} 0
node_disk_discard_time_seconds_total{device="mtdblock35"} 0
node_disk_discard_time_seconds_total{device="mtdblock36"} 0
node_disk_discard_time_seconds_total{device="mtdblock4"} 0
node_disk_discard_time_seconds_total{device="mtdblock5"} 0
node_disk_discard_time_seconds_total{device="mtdblock6"} 0
node_disk_discard_time_seconds_total{device="mtdblock7"} 0
node_disk_discard_time_seconds_total{device="mtdblock8"} 0
node_disk_discard_time_seconds_total{device="mtdblock9"} 0
node_disk_discard_time_seconds_total{device="ubiblock25_0"} 0
node_disk_discard_time_seconds_total{device="ubiblock26_0"} 0
# HELP node_disk_discarded_sectors_total The total number of sectors discarded successfully.
# TYPE node_disk_discarded_sectors_total counter
node_disk_discarded_sectors_total{device="dm-0"} 0
node_disk_discarded_sectors_total{device="dm-1"} 0
node_disk_discarded_sectors_total{device="mtdblock0"} 0
node_disk_discarded_sectors_total{device="mtdblock1"} 0
node_disk_discarded_sectors_total{device="mtdblock10"} 0
node_disk_discarded_sectors_total{device="mtdblock11"} 0
node_disk_discarded_sectors_total{device="mtdblock12"} 0
node_disk_discarded_sectors_total{device="mtdblock13"} 0
node_disk_discarded_sectors_total{device="mtdblock14"} 0
node_disk_discarded_sectors_total{device="mtdblock15"} 0
node_disk_discarded_sectors_total{device="mtdblock16"} 0
node_disk_discarded_sectors_total{device="mtdblock17"} 0
node_disk_discarded_sectors_total{device="mtdblock18"} 0
node_disk_discarded_sectors_total{device="mtdblock19"} 0
node_disk_discarded_sectors_total{device="mtdblock2"} 0
node_disk_discarded_sectors_total{device="mtdblock20"} 0
node_disk_discarded_sectors_total{device="mtdblock21"} 0
node_disk_discarded_sectors_total{device="mtdblock22"} 0
node_disk_discarded_sectors_total{device="mtdblock23"} 0
node_disk_discarded_sectors_total{device="mtdblock24"} 0
node_disk_discarded_sectors_total{device="mtdblock25"} 0
node_disk_discarded_sectors_total{device="mtdblock26"} 0
node_disk_discarded_sectors_total{device="mtdblock27"} 0
node_disk_discarded_sectors_total{device="mtdblock28"} 0
node_disk_discarded_sectors_total{device="mtdblock29"} 0
node_disk_discarded_sectors_total{device="mtdblock3"} 0
node_disk_discarded_sectors_total{device="mtdblock30"} 0
node_disk_discarded_sectors_total{device="mtdblock31"} 0
node_disk_discarded_sectors_total{device="mtdblock32"} 0
node_disk_discarded_sectors_total{device="mtdblock33"} 0
node_disk_discarded_sectors_total{device="mtdblock34"} 0
node_disk_discarded_sectors_total{device="mtdblock35"} 0
node_disk_discarded_sectors_total{device="mtdblock36"} 0
node_disk_discarded_sectors_total{device="mtdblock4"} 0
node_disk_discarded_sectors_total{device="mtdblock5"} 0
node_disk_discarded_sectors_total{device="mtdblock6"} 0
node_disk_discarded_sectors_total{device="mtdblock7"} 0
node_disk_discarded_sectors_total{device="mtdblock8"} 0
node_disk_discarded_sectors_total{device="mtdblock9"} 0
node_disk_discarded_sectors_total{device="ubiblock25_0"} 0
node_disk_discarded_sectors_total{device="ubiblock26_0"} 0
# HELP node_disk_discards_completed_total The total number of discards completed successfully.
# TYPE node_disk_discards_completed_total counter
node_disk_discards_completed_total{device="dm-0"} 0
node_disk_discards_completed_total{device="dm-1"} 0
node_disk_discards_completed_total{device="mtdblock0"} 0
node_disk_discards_completed_total{device="mtdblock1"} 0
node_disk_discards_completed_total{device="mtdblock10"} 0
node_disk_discards_completed_total{device="mtdblock11"} 0
node_disk_discards_completed_total{device="mtdblock12"} 0
node_disk_discards_completed_total{device="mtdblock13"} 0
node_disk_discards_completed_total{device="mtdblock14"} 0
node_disk_discards_completed_total{device="mtdblock15"} 0
node_disk_discards_completed_total{device="mtdblock16"} 0
node_disk_discards_completed_total{device="mtdblock17"} 0
node_disk_discards_completed_total{device="mtdblock18"} 0
node_disk_discards_completed_total{device="mtdblock19"} 0
node_disk_discards_completed_total{device="mtdblock2"} 0
node_disk_discards_completed_total{device="mtdblock20"} 0
node_disk_discards_completed_total{device="mtdblock21"} 0
node_disk_discards_completed_total{device="mtdblock22"} 0
node_disk_discards_completed_total{device="mtdblock23"} 0
node_disk_discards_completed_total{device="mtdblock24"} 0
node_disk_discards_completed_total{device="mtdblock25"} 0
node_disk_discards_completed_total{device="mtdblock26"} 0
node_disk_discards_completed_total{device="mtdblock27"} 0
node_disk_discards_completed_total{device="mtdblock28"} 0
node_disk_discards_completed_total{device="mtdblock29"} 0
node_disk_discards_completed_total{device="mtdblock3"} 0
node_disk_discards_completed_total{device="mtdblock30"} 0
node_disk_discards_completed_total{device="mtdblock31"} 0
node_disk_discards_completed_total{device="mtdblock32"} 0
node_disk_discards_completed_total{device="mtdblock33"} 0
node_disk_discards_completed_total{device="mtdblock34"} 0
node_disk_discards_completed_total{device="mtdblock35"} 0
node_disk_discards_completed_total{device="mtdblock36"} 0
node_disk_discards_completed_total{device="mtdblock4"} 0
node_disk_discards_completed_total{device="mtdblock5"} 0
node_disk_discards_completed_total{device="mtdblock6"} 0
node_disk_discards_completed_total{device="mtdblock7"} 0
node_disk_discards_completed_total{device="mtdblock8"} 0
node_disk_discards_completed_total{device="mtdblock9"} 0
node_disk_discards_completed_total{device="ubiblock25_0"} 0
node_disk_discards_completed_total{device="ubiblock26_0"} 0
# HELP node_disk_discards_merged_total The total number of discards merged.
# TYPE node_disk_discards_merged_total counter
node_disk_discards_merged_total{device="dm-0"} 0
node_disk_discards_merged_total{device="dm-1"} 0
node_disk_discards_merged_total{device="mtdblock0"} 0
node_disk_discards_merged_total{device="mtdblock1"} 0
node_disk_discards_merged_total{device="mtdblock10"} 0
node_disk_discards_merged_total{device="mtdblock11"} 0
node_disk_discards_merged_total{device="mtdblock12"} 0
node_disk_discards_merged_total{device="mtdblock13"} 0
node_disk_discards_merged_total{device="mtdblock14"} 0
node_disk_discards_merged_total{device="mtdblock15"} 0
node_disk_discards_merged_total{device="mtdblock16"} 0
node_disk_discards_merged_total{device="mtdblock17"} 0
node_disk_discards_merged_total{device="mtdblock18"} 0
node_disk_discards_merged_total{device="mtdblock19"} 0
node_disk_discards_merged_total{device="mtdblock2"} 0
node_disk_discards_merged_total{device="mtdblock20"} 0
node_disk_discards_merged_total{device="mtdblock21"} 0
node_disk_discards_merged_total{device="mtdblock22"} 0
node_disk_discards_merged_total{device="mtdblock23"} 0
node_disk_discards_merged_total{device="mtdblock24"} 0
node_disk_discards_merged_total{device="mtdblock25"} 0
node_disk_discards_merged_total{device="mtdblock26"} 0
node_disk_discards_merged_total{device="mtdblock27"} 0
node_disk_discards_merged_total{device="mtdblock28"} 0
node_disk_discards_merged_total{device="mtdblock29"} 0
node_disk_discards_merged_total{device="mtdblock3"} 0
node_disk_discards_merged_total{device="mtdblock30"} 0
node_disk_discards_merged_total{device="mtdblock31"} 0
node_disk_discards_merged_total{device="mtdblock32"} 0
node_disk_discards_merged_total{device="mtdblock33"} 0
node_disk_discards_merged_total{device="mtdblock34"} 0
node_disk_discards_merged_total{device="mtdblock35"} 0
node_disk_discards_merged_total{device="mtdblock36"} 0
node_disk_discards_merged_total{device="mtdblock4"} 0
node_disk_discards_merged_total{device="mtdblock5"} 0
node_disk_discards_merged_total{device="mtdblock6"} 0
node_disk_discards_merged_total{device="mtdblock7"} 0
node_disk_discards_merged_total{device="mtdblock8"} 0
node_disk_discards_merged_total{device="mtdblock9"} 0
node_disk_discards_merged_total{device="ubiblock25_0"} 0
node_disk_discards_merged_total{device="ubiblock26_0"} 0
# HELP node_disk_info Info of /sys/block/<block_device>.
# TYPE node_disk_info gauge
node_disk_info{device="dm-0",major="254",minor="0",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="dm-1",major="254",minor="1",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock0",major="31",minor="0",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock1",major="31",minor="1",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock10",major="31",minor="10",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock11",major="31",minor="11",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock12",major="31",minor="12",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock13",major="31",minor="13",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock14",major="31",minor="14",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock15",major="31",minor="15",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock16",major="31",minor="16",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock17",major="31",minor="17",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock18",major="31",minor="18",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock19",major="31",minor="19",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock2",major="31",minor="2",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock20",major="31",minor="20",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock21",major="31",minor="21",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock22",major="31",minor="22",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock23",major="31",minor="23",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock24",major="31",minor="24",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock25",major="31",minor="25",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock26",major="31",minor="26",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock27",major="31",minor="27",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock28",major="31",minor="28",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock29",major="31",minor="29",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock3",major="31",minor="3",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock30",major="31",minor="30",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock31",major="31",minor="31",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock32",major="31",minor="32",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock33",major="31",minor="33",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock34",major="31",minor="34",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock35",major="31",minor="35",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock36",major="31",minor="36",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock4",major="31",minor="4",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock5",major="31",minor="5",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock6",major="31",minor="6",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock7",major="31",minor="7",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock8",major="31",minor="8",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="mtdblock9",major="31",minor="9",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="ubiblock25_0",major="253",minor="1",model="",path="",revision="",serial="",wwn=""} 1
node_disk_info{device="ubiblock26_0",major="253",minor="0",model="",path="",revision="",serial="",wwn=""} 1
# HELP node_disk_io_now The number of I/Os currently in progress.
# TYPE node_disk_io_now gauge
node_disk_io_now{device="dm-0"} 0
node_disk_io_now{device="dm-1"} 0
node_disk_io_now{device="mtdblock0"} 0
node_disk_io_now{device="mtdblock1"} 0
node_disk_io_now{device="mtdblock10"} 0
node_disk_io_now{device="mtdblock11"} 0
node_disk_io_now{device="mtdblock12"} 0
node_disk_io_now{device="mtdblock13"} 0
node_disk_io_now{device="mtdblock14"} 0
node_disk_io_now{device="mtdblock15"} 0
node_disk_io_now{device="mtdblock16"} 0
node_disk_io_now{device="mtdblock17"} 0
node_disk_io_now{device="mtdblock18"} 0
node_disk_io_now{device="mtdblock19"} 0
node_disk_io_now{device="mtdblock2"} 0
node_disk_io_now{device="mtdblock20"} 0
node_disk_io_now{device="mtdblock21"} 0
node_disk_io_now{device="mtdblock22"} 0
node_disk_io_now{device="mtdblock23"} 0
node_disk_io_now{device="mtdblock24"} 0
node_disk_io_now{device="mtdblock25"} 0
node_disk_io_now{device="mtdblock26"} 0
node_disk_io_now{device="mtdblock27"} 0
node_disk_io_now{device="mtdblock28"} 0
node_disk_io_now{device="mtdblock29"} 0
node_disk_io_now{device="mtdblock3"} 0
node_disk_io_now{device="mtdblock30"} 0
node_disk_io_now{device="mtdblock31"} 0
node_disk_io_now{device="mtdblock32"} 0
node_disk_io_now{device="mtdblock33"} 0
node_disk_io_now{device="mtdblock34"} 0
node_disk_io_now{device="mtdblock35"} 0
node_disk_io_now{device="mtdblock36"} 0
node_disk_io_now{device="mtdblock4"} 0
node_disk_io_now{device="mtdblock5"} 0
node_disk_io_now{device="mtdblock6"} 0
node_disk_io_now{device="mtdblock7"} 0
node_disk_io_now{device="mtdblock8"} 0
node_disk_io_now{device="mtdblock9"} 0
node_disk_io_now{device="ubiblock25_0"} 0
node_disk_io_now{device="ubiblock26_0"} 0
# HELP node_disk_io_time_seconds_total Total seconds spent doing I/Os.
# TYPE node_disk_io_time_seconds_total counter
node_disk_io_time_seconds_total{device="dm-0"} 16.31
node_disk_io_time_seconds_total{device="dm-1"} 95.4
node_disk_io_time_seconds_total{device="mtdblock0"} 0
node_disk_io_time_seconds_total{device="mtdblock1"} 0
node_disk_io_time_seconds_total{device="mtdblock10"} 0
node_disk_io_time_seconds_total{device="mtdblock11"} 0
node_disk_io_time_seconds_total{device="mtdblock12"} 0
node_disk_io_time_seconds_total{device="mtdblock13"} 0
node_disk_io_time_seconds_total{device="mtdblock14"} 0
node_disk_io_time_seconds_total{device="mtdblock15"} 0
node_disk_io_time_seconds_total{device="mtdblock16"} 0.58
node_disk_io_time_seconds_total{device="mtdblock17"} 0
node_disk_io_time_seconds_total{device="mtdblock18"} 0.05
node_disk_io_time_seconds_total{device="mtdblock19"} 0
node_disk_io_time_seconds_total{device="mtdblock2"} 0
node_disk_io_time_seconds_total{device="mtdblock20"} 0
node_disk_io_time_seconds_total{device="mtdblock21"} 0
node_disk_io_time_seconds_total{device="mtdblock22"} 0
node_disk_io_time_seconds_total{device="mtdblock23"} 0
node_disk_io_time_seconds_total{device="mtdblock24"} 0
node_disk_io_time_seconds_total{device="mtdblock25"} 0
node_disk_io_time_seconds_total{device="mtdblock26"} 0
node_disk_io_time_seconds_total{device="mtdblock27"} 1.1400000000000001
node_disk_io_time_seconds_total{device="mtdblock28"} 0
node_disk_io_time_seconds_total{device="mtdblock29"} 0
node_disk_io_time_seconds_total{device="mtdblock3"} 0
node_disk_io_time_seconds_total{device="mtdblock30"} 11.58
node_disk_io_time_seconds_total{device="mtdblock31"} 0
node_disk_io_time_seconds_total{device="mtdblock32"} 0
node_disk_io_time_seconds_total{device="mtdblock33"} 0
node_disk_io_time_seconds_total{device="mtdblock34"} 0
node_disk_io_time_seconds_total{device="mtdblock35"} 0
node_disk_io_time_seconds_total{device="mtdblock36"} 0
node_disk_io_time_seconds_total{device="mtdblock4"} 0
node_disk_io_time_seconds_total{device="mtdblock5"} 0
node_disk_io_time_seconds_total{device="mtdblock6"} 0
node_disk_io_time_seconds_total{device="mtdblock7"} 0
node_disk_io_time_seconds_total{device="mtdblock8"} 0
node_disk_io_time_seconds_total{device="mtdblock9"} 0
node_disk_io_time_seconds_total{device="ubiblock25_0"} 1.02
node_disk_io_time_seconds_total{device="ubiblock26_0"} 30.26
# HELP node_disk_io_time_weighted_seconds_total The weighted # of seconds spent doing I/Os.
# TYPE node_disk_io_time_weighted_seconds_total counter
node_disk_io_time_weighted_seconds_total{device="dm-0"} 39.84
node_disk_io_time_weighted_seconds_total{device="dm-1"} 7821.27
node_disk_io_time_weighted_seconds_total{device="mtdblock0"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock1"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock10"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock11"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock12"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock13"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock14"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock15"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock16"} 0.65
node_disk_io_time_weighted_seconds_total{device="mtdblock17"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock18"} 0.04
node_disk_io_time_weighted_seconds_total{device="mtdblock19"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock2"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock20"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock21"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock22"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock23"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock24"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock25"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock26"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock27"} 0.41000000000000003
node_disk_io_time_weighted_seconds_total{device="mtdblock28"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock29"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock3"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock30"} 4.08
node_disk_io_time_weighted_seconds_total{device="mtdblock31"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock32"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock33"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock34"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock35"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock36"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock4"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock5"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock6"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock7"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock8"} 0
node_disk_io_time_weighted_seconds_total{device="mtdblock9"} 0
node_disk_io_time_weighted_seconds_total{device="ubiblock25_0"} 0.91
node_disk_io_time_weighted_seconds_total{device="ubiblock26_0"} 1.49
# HELP node_disk_read_bytes_total The total number of bytes read successfully.
# TYPE node_disk_read_bytes_total counter
node_disk_read_bytes_total{device="dm-0"} 520192
node_disk_read_bytes_total{device="dm-1"} 2.01984e+07
node_disk_read_bytes_total{device="mtdblock0"} 0
node_disk_read_bytes_total{device="mtdblock1"} 0
node_disk_read_bytes_total{device="mtdblock10"} 0
node_disk_read_bytes_total{device="mtdblock11"} 0
node_disk_read_bytes_total{device="mtdblock12"} 0
node_disk_read_bytes_total{device="mtdblock13"} 0
node_disk_read_bytes_total{device="mtdblock14"} 0
node_disk_read_bytes_total{device="mtdblock15"} 0
node_disk_read_bytes_total{device="mtdblock16"} 2.859008e+06
node_disk_read_bytes_total{device="mtdblock17"} 0
node_disk_read_bytes_total{device="mtdblock18"} 262144
node_disk_read_bytes_total{device="mtdblock19"} 0
node_disk_read_bytes_total{device="mtdblock2"} 0
node_disk_read_bytes_total{device="mtdblock20"} 0
node_disk_read_bytes_total{device="mtdblock21"} 0
node_disk_read_bytes_total{device="mtdblock22"} 0
node_disk_read_bytes_total{device="mtdblock23"} 0
node_disk_read_bytes_total{device="mtdblock24"} 0
node_disk_read_bytes_total{device="mtdblock25"} 0
node_disk_read_bytes_total{device="mtdblock26"} 0
node_disk_read_bytes_total{device="mtdblock27"} 1.093632e+06
node_disk_read_bytes_total{device="mtdblock28"} 0
node_disk_read_bytes_total{device="mtdblock29"} 0
node_disk_read_bytes_total{device="mtdblock3"} 0
node_disk_read_bytes_total{device="mtdblock30"} 3.851776e+07
node_disk_read_bytes_total{device="mtdblock31"} 0
node_disk_read_bytes_total{device="mtdblock32"} 0
node_disk_read_bytes_total{device="mtdblock33"} 0
node_disk_read_bytes_total{device="mtdblock34"} 0
node_disk_read_bytes_total{device="mtdblock35"} 0
node_disk_read_bytes_total{device="mtdblock36"} 0
node_disk_read_bytes_total{device="mtdblock4"} 0
node_disk_read_bytes_total{device="mtdblock5"} 0
node_disk_read_bytes_total{device="mtdblock6"} 0
node_disk_read_bytes_total{device="mtdblock7"} 0
node_disk_read_bytes_total{device="mtdblock8"} 0
node_disk_read_bytes_total{device="mtdblock9"} 0
node_disk_read_bytes_total{device="ubiblock25_0"} 7.479296e+06
node_disk_read_bytes_total{device="ubiblock26_0"} 7.509504e+07
# HELP node_disk_read_time_seconds_total The total number of seconds spent by all reads.
# TYPE node_disk_read_time_seconds_total counter
node_disk_read_time_seconds_total{device="dm-0"} 0.65
node_disk_read_time_seconds_total{device="dm-1"} 8.98
node_disk_read_time_seconds_total{device="mtdblock0"} 0
node_disk_read_time_seconds_total{device="mtdblock1"} 0
node_disk_read_time_seconds_total{device="mtdblock10"} 0
node_disk_read_time_seconds_total{device="mtdblock11"} 0
node_disk_read_time_seconds_total{device="mtdblock12"} 0
node_disk_read_time_seconds_total{device="mtdblock13"} 0
node_disk_read_time_seconds_total{device="mtdblock14"} 0
node_disk_read_time_seconds_total{device="mtdblock15"} 0
node_disk_read_time_seconds_total{device="mtdblock16"} 0.799
node_disk_read_time_seconds_total{device="mtdblock17"} 0
node_disk_read_time_seconds_total{device="mtdblock18"} 0.064
node_disk_read_time_seconds_total{device="mtdblock19"} 0
node_disk_read_time_seconds_total{device="mtdblock2"} 0
node_disk_read_time_seconds_total{device="mtdblock20"} 0
node_disk_read_time_seconds_total{device="mtdblock21"} 0
node_disk_read_time_seconds_total{device="mtdblock22"} 0
node_disk_read_time_seconds_total{device="mtdblock23"} 0
node_disk_read_time_seconds_total{device="mtdblock24"} 0
node_disk_read_time_seconds_total{device="mtdblock25"} 0
node_disk_read_time_seconds_total{device="mtdblock26"} 0
node_disk_read_time_seconds_total{device="mtdblock27"} 0.163
node_disk_read_time_seconds_total{device="mtdblock28"} 0
node_disk_read_time_seconds_total{device="mtdblock29"} 0
node_disk_read_time_seconds_total{device="mtdblock3"} 0
node_disk_read_time_seconds_total{device="mtdblock30"} 7.399
node_disk_read_time_seconds_total{device="mtdblock31"} 0
node_disk_read_time_seconds_total{device="mtdblock32"} 0
node_disk_read_time_seconds_total{device="mtdblock33"} 0
node_disk_read_time_seconds_total{device="mtdblock34"} 0
node_disk_read_time_seconds_total{device="mtdblock35"} 0
node_disk_read_time_seconds_total{device="mtdblock36"} 0
node_disk_read_time_seconds_total{device="mtdblock4"} 0
node_disk_read_time_seconds_total{device="mtdblock5"} 0
node_disk_read_time_seconds_total{device="mtdblock6"} 0
node_disk_read_time_seconds_total{device="mtdblock7"} 0
node_disk_read_time_seconds_total{device="mtdblock8"} 0
node_disk_read_time_seconds_total{device="mtdblock9"} 0
node_disk_read_time_seconds_total{device="ubiblock25_0"} 1.334
node_disk_read_time_seconds_total{device="ubiblock26_0"} 9.175
# HELP node_disk_reads_completed_total The total number of reads completed successfully.
# TYPE node_disk_reads_completed_total counter
node_disk_reads_completed_total{device="dm-0"} 291
node_disk_reads_completed_total{device="dm-1"} 1370
node_disk_reads_completed_total{device="mtdblock0"} 0
node_disk_reads_completed_total{device="mtdblock1"} 0
node_disk_reads_completed_total{device="mtdblock10"} 0
node_disk_reads_completed_total{device="mtdblock11"} 0
node_disk_reads_completed_total{device="mtdblock12"} 0
node_disk_reads_completed_total{device="mtdblock13"} 0
node_disk_reads_completed_total{device="mtdblock14"} 0
node_disk_reads_completed_total{device="mtdblock15"} 0
node_disk_reads_completed_total{device="mtdblock16"} 50
node_disk_reads_completed_total{device="mtdblock17"} 0
node_disk_reads_completed_total{device="mtdblock18"} 6
node_disk_reads_completed_total{device="mtdblock19"} 0
node_disk_reads_completed_total{device="mtdblock2"} 0
node_disk_reads_completed_total{device="mtdblock20"} 0
node_disk_reads_completed_total{device="mtdblock21"} 0
node_disk_reads_completed_total{device="mtdblock22"} 0
node_disk_reads_completed_total{device="mtdblock23"} 0
node_disk_reads_completed_total{device="mtdblock24"} 0
node_disk_reads_completed_total{device="mtdblock25"} 0
node_disk_reads_completed_total{device="mtdblock26"} 0
node_disk_reads_completed_total{device="mtdblock27"} 267
node_disk_reads_completed_total{device="mtdblock28"} 0
node_disk_reads_completed_total{device="mtdblock29"} 0
node_disk_reads_completed_total{device="mtdblock3"} 0
node_disk_reads_completed_total{device="mtdblock30"} 895
node_disk_reads_completed_total{device="mtdblock31"} 0
node_disk_reads_completed_total{device="mtdblock32"} 0
node_disk_reads_completed_total{device="mtdblock33"} 0
node_disk_reads_completed_total{device="mtdblock34"} 0
node_disk_reads_completed_total{device="mtdblock35"} 0
node_disk_reads_completed_total{device="mtdblock36"} 0
node_disk_reads_completed_total{device="mtdblock4"} 0
node_disk_reads_completed_total{device="mtdblock5"} 0
node_disk_reads_completed_total{device="mtdblock6"} 0
node_disk_reads_completed_total{device="mtdblock7"} 0
node_disk_reads_completed_total{device="mtdblock8"} 0
node_disk_reads_completed_total{device="mtdblock9"} 0
node_disk_reads_completed_total{device="ubiblock25_0"} 119
node_disk_reads_completed_total{device="ubiblock26_0"} 2611
# HELP node_disk_reads_merged_total The total number of reads merged.
# TYPE node_disk_reads_merged_total counter
node_disk_reads_merged_total{device="dm-0"} 0
node_disk_reads_merged_total{device="dm-1"} 0
node_disk_reads_merged_total{device="mtdblock0"} 0
node_disk_reads_merged_total{device="mtdblock1"} 0
node_disk_reads_merged_total{device="mtdblock10"} 0
node_disk_reads_merged_total{device="mtdblock11"} 0
node_disk_reads_merged_total{device="mtdblock12"} 0
node_disk_reads_merged_total{device="mtdblock13"} 0
node_disk_reads_merged_total{device="mtdblock14"} 0
node_disk_reads_merged_total{device="mtdblock15"} 0
node_disk_reads_merged_total{device="mtdblock16"} 0
node_disk_reads_merged_total{device="mtdblock17"} 0
node_disk_reads_merged_total{device="mtdblock18"} 0
node_disk_reads_merged_total{device="mtdblock19"} 0
node_disk_reads_merged_total{device="mtdblock2"} 0
node_disk_reads_merged_total{device="mtdblock20"} 0
node_disk_reads_merged_total{device="mtdblock21"} 0
node_disk_reads_merged_total{device="mtdblock22"} 0
node_disk_reads_merged_total{device="mtdblock23"} 0
node_disk_reads_merged_total{device="mtdblock24"} 0
node_disk_reads_merged_total{device="mtdblock25"} 0
node_disk_reads_merged_total{device="mtdblock26"} 0
node_disk_reads_merged_total{device="mtdblock27"} 0
node_disk_reads_merged_total{device="mtdblock28"} 0
node_disk_reads_merged_total{device="mtdblock29"} 0
node_disk_reads_merged_total{device="mtdblock3"} 0
node_disk_reads_merged_total{device="mtdblock30"} 36720
node_disk_reads_merged_total{device="mtdblock31"} 0
node_disk_reads_merged_total{device="mtdblock32"} 0
node_disk_reads_merged_total{device="mtdblock33"} 0
node_disk_reads_merged_total{device="mtdblock34"} 0
node_disk_reads_merged_total{device="mtdblock35"} 0
node_disk_reads_merged_total{device="mtdblock36"} 0
node_disk_reads_merged_total{device="mtdblock4"} 0
node_disk_reads_merged_total{device="mtdblock5"} 0
node_disk_reads_merged_total{device="mtdblock6"} 0
node_disk_reads_merged_total{device="mtdblock7"} 0
node_disk_reads_merged_total{device="mtdblock8"} 0
node_disk_reads_merged_total{device="mtdblock9"} 0
node_disk_reads_merged_total{device="ubiblock25_0"} 7185
node_disk_reads_merged_total{device="ubiblock26_0"} 70724
# HELP node_disk_write_time_seconds_total This is the total number of seconds spent by all writes.
# TYPE node_disk_write_time_seconds_total counter
node_disk_write_time_seconds_total{device="dm-0"} 39.19
node_disk_write_time_seconds_total{device="dm-1"} 7812.33
node_disk_write_time_seconds_total{device="mtdblock0"} 0
node_disk_write_time_seconds_total{device="mtdblock1"} 0
node_disk_write_time_seconds_total{device="mtdblock10"} 0
node_disk_write_time_seconds_total{device="mtdblock11"} 0
node_disk_write_time_seconds_total{device="mtdblock12"} 0
node_disk_write_time_seconds_total{device="mtdblock13"} 0
node_disk_write_time_seconds_total{device="mtdblock14"} 0
node_disk_write_time_seconds_total{device="mtdblock15"} 0
node_disk_write_time_seconds_total{device="mtdblock16"} 0
node_disk_write_time_seconds_total{device="mtdblock17"} 0
node_disk_write_time_seconds_total{device="mtdblock18"} 0
node_disk_write_time_seconds_total{device="mtdblock19"} 0
node_disk_write_time_seconds_total{device="mtdblock2"} 0
node_disk_write_time_seconds_total{device="mtdblock20"} 0
node_disk_write_time_seconds_total{device="mtdblock21"} 0
node_disk_write_time_seconds_total{device="mtdblock22"} 0
node_disk_write_time_seconds_total{device="mtdblock23"} 0
node_disk_write_time_seconds_total{device="mtdblock24"} 0
node_disk_write_time_seconds_total{device="mtdblock25"} 0
node_disk_write_time_seconds_total{device="mtdblock26"} 0
node_disk_write_time_seconds_total{device="mtdblock27"} 0.40700000000000003
node_disk_write_time_seconds_total{device="mtdblock28"} 0
node_disk_write_time_seconds_total{device="mtdblock29"} 0
node_disk_write_time_seconds_total{device="mtdblock3"} 0
node_disk_write_time_seconds_total{device="mtdblock30"} 0
node_disk_write_time_seconds_total{device="mtdblock31"} 0
node_disk_write_time_seconds_total{device="mtdblock32"} 0
node_disk_write_time_seconds_total{device="mtdblock33"} 0
node_disk_write_time_seconds_total{device="mtdblock34"} 0
node_disk_write_time_seconds_total{device="mtdblock35"} 0
node_disk_write_time_seconds_total{device="mtdblock36"} 0
node_disk_write_time_seconds_total{device="mtdblock4"} 0
node_disk_write_time_seconds_total{device="mtdblock5"} 0
node_disk_write_time_seconds_total{device="mtdblock6"} 0
node_disk_write_time_seconds_total{device="mtdblock7"} 0
node_disk_write_time_seconds_total{device="mtdblock8"} 0
node_disk_write_time_seconds_total{device="mtdblock9"} 0
node_disk_write_time_seconds_total{device="ubiblock25_0"} 0
node_disk_write_time_seconds_total{device="ubiblock26_0"} 0
# HELP node_disk_writes_completed_total The total number of writes completed successfully.
# TYPE node_disk_writes_completed_total counter
node_disk_writes_completed_total{device="dm-0"} 3642
node_disk_writes_completed_total{device="dm-1"} 26105
node_disk_writes_completed_total{device="mtdblock0"} 0
node_disk_writes_completed_total{device="mtdblock1"} 0
node_disk_writes_completed_total{device="mtdblock10"} 0
node_disk_writes_completed_total{device="mtdblock11"} 0
node_disk_writes_completed_total{device="mtdblock12"} 0
node_disk_writes_completed_total{device="mtdblock13"} 0
node_disk_writes_completed_total{device="mtdblock14"} 0
node_disk_writes_completed_total{device="mtdblock15"} 0
node_disk_writes_completed_total{device="mtdblock16"} 0
node_disk_writes_completed_total{device="mtdblock17"} 0
node_disk_writes_completed_total{device="mtdblock18"} 0
node_disk_writes_completed_total{device="mtdblock19"} 0
node_disk_writes_completed_total{device="mtdblock2"} 0
node_disk_writes_completed_total{device="mtdblock20"} 0
node_disk_writes_completed_total{device="mtdblock21"} 0
node_disk_writes_completed_total{device="mtdblock22"} 0
node_disk_writes_completed_total{device="mtdblock23"} 0
node_disk_writes_completed_total{device="mtdblock24"} 0
node_disk_writes_completed_total{device="mtdblock25"} 0
node_disk_writes_completed_total{device="mtdblock26"} 0
node_disk_writes_completed_total{device="mtdblock27"} 7
node_disk_writes_completed_total{device="mtdblock28"} 0
node_disk_writes_completed_total{device="mtdblock29"} 0
node_disk_writes_completed_total{device="mtdblock3"} 0
node_disk_writes_completed_total{device="mtdblock30"} 0
node_disk_writes_completed_total{device="mtdblock31"} 0
node_disk_writes_completed_total{device="mtdblock32"} 0
node_disk_writes_completed_total{device="mtdblock33"} 0
node_disk_writes_completed_total{device="mtdblock34"} 0
node_disk_writes_completed_total{device="mtdblock35"} 0
node_disk_writes_completed_total{device="mtdblock36"} 0
node_disk_writes_completed_total{device="mtdblock4"} 0
node_disk_writes_completed_total{device="mtdblock5"} 0
node_disk_writes_completed_total{device="mtdblock6"} 0
node_disk_writes_completed_total{device="mtdblock7"} 0
node_disk_writes_completed_total{device="mtdblock8"} 0
node_disk_writes_completed_total{device="mtdblock9"} 0
node_disk_writes_completed_total{device="ubiblock25_0"} 0
node_disk_writes_completed_total{device="ubiblock26_0"} 0
# HELP node_disk_writes_merged_total The number of writes merged.
# TYPE node_disk_writes_merged_total counter
node_disk_writes_merged_total{device="dm-0"} 0
node_disk_writes_merged_total{device="dm-1"} 0
node_disk_writes_merged_total{device="mtdblock0"} 0
node_disk_writes_merged_total{device="mtdblock1"} 0
node_disk_writes_merged_total{device="mtdblock10"} 0
node_disk_writes_merged_total{device="mtdblock11"} 0
node_disk_writes_merged_total{device="mtdblock12"} 0
node_disk_writes_merged_total{device="mtdblock13"} 0
node_disk_writes_merged_total{device="mtdblock14"} 0
node_disk_writes_merged_total{device="mtdblock15"} 0
node_disk_writes_merged_total{device="mtdblock16"} 0
node_disk_writes_merged_total{device="mtdblock17"} 0
node_disk_writes_merged_total{device="mtdblock18"} 0
node_disk_writes_merged_total{device="mtdblock19"} 0
node_disk_writes_merged_total{device="mtdblock2"} 0
node_disk_writes_merged_total{device="mtdblock20"} 0
node_disk_writes_merged_total{device="mtdblock21"} 0
node_disk_writes_merged_total{device="mtdblock22"} 0
node_disk_writes_merged_total{device="mtdblock23"} 0
node_disk_writes_merged_total{device="mtdblock24"} 0
node_disk_writes_merged_total{device="mtdblock25"} 0
node_disk_writes_merged_total{device="mtdblock26"} 0
node_disk_writes_merged_total{device="mtdblock27"} 0
node_disk_writes_merged_total{device="mtdblock28"} 0
node_disk_writes_merged_total{device="mtdblock29"} 0
node_disk_writes_merged_total{device="mtdblock3"} 0
node_disk_writes_merged_total{device="mtdblock30"} 0
node_disk_writes_merged_total{device="mtdblock31"} 0
node_disk_writes_merged_total{device="mtdblock32"} 0
node_disk_writes_merged_total{device="mtdblock33"} 0
node_disk_writes_merged_total{device="mtdblock34"} 0
node_disk_writes_merged_total{device="mtdblock35"} 0
node_disk_writes_merged_total{device="mtdblock36"} 0
node_disk_writes_merged_total{device="mtdblock4"} 0
node_disk_writes_merged_total{device="mtdblock5"} 0
node_disk_writes_merged_total{device="mtdblock6"} 0
node_disk_writes_merged_total{device="mtdblock7"} 0
node_disk_writes_merged_total{device="mtdblock8"} 0
node_disk_writes_merged_total{device="mtdblock9"} 0
node_disk_writes_merged_total{device="ubiblock25_0"} 0
node_disk_writes_merged_total{device="ubiblock26_0"} 0
# HELP node_disk_written_bytes_total The total number of bytes written successfully.
# TYPE node_disk_written_bytes_total counter
node_disk_written_bytes_total{device="dm-0"} 3.656704e+06
node_disk_written_bytes_total{device="dm-1"} 1.0241536e+08
node_disk_written_bytes_total{device="mtdblock0"} 0
node_disk_written_bytes_total{device="mtdblock1"} 0
node_disk_written_bytes_total{device="mtdblock10"} 0
node_disk_written_bytes_total{device="mtdblock11"} 0
node_disk_written_bytes_total{device="mtdblock12"} 0
node_disk_written_bytes_total{device="mtdblock13"} 0
node_disk_written_bytes_total{device="mtdblock14"} 0
node_disk_written_bytes_total{device="mtdblock15"} 0
node_disk_written_bytes_total{device="mtdblock16"} 0
node_disk_written_bytes_total{device="mtdblock17"} 0
node_disk_written_bytes_total{device="mtdblock18"} 0
node_disk_written_bytes_total{device="mtdblock19"} 0
node_disk_written_bytes_total{device="mtdblock2"} 0
node_disk_written_bytes_total{device="mtdblock20"} 0
node_disk_written_bytes_total{device="mtdblock21"} 0
node_disk_written_bytes_total{device="mtdblock22"} 0
node_disk_written_bytes_total{device="mtdblock23"} 0
node_disk_written_bytes_total{device="mtdblock24"} 0
node_disk_written_bytes_total{device="mtdblock25"} 0
node_disk_written_bytes_total{device="mtdblock26"} 0
node_disk_written_bytes_total{device="mtdblock27"} 28672
node_disk_written_bytes_total{device="mtdblock28"} 0
node_disk_written_bytes_total{device="mtdblock29"} 0
node_disk_written_bytes_total{device="mtdblock3"} 0
node_disk_written_bytes_total{device="mtdblock30"} 0
node_disk_written_bytes_total{device="mtdblock31"} 0
node_disk_written_bytes_total{device="mtdblock32"} 0
node_disk_written_bytes_total{device="mtdblock33"} 0
node_disk_written_bytes_total{device="mtdblock34"} 0
node_disk_written_bytes_total{device="mtdblock35"} 0
node_disk_written_bytes_total{device="mtdblock36"} 0
node_disk_written_bytes_total{device="mtdblock4"} 0
node_disk_written_bytes_total{device="mtdblock5"} 0
node_disk_written_bytes_total{device="mtdblock6"} 0
node_disk_written_bytes_total{device="mtdblock7"} 0
node_disk_written_bytes_total{device="mtdblock8"} 0
node_disk_written_bytes_total{device="mtdblock9"} 0
node_disk_written_bytes_total{device="ubiblock25_0"} 0
node_disk_written_bytes_total{device="ubiblock26_0"} 0
# HELP node_entropy_available_bits Bits of available entropy.
# TYPE node_entropy_available_bits gauge
node_entropy_available_bits 256
# HELP node_entropy_pool_size_bits Bits of entropy pool.
# TYPE node_entropy_pool_size_bits gauge
node_entropy_pool_size_bits 256
# HELP node_exporter_build_info A metric with a constant '1' value labeled by version, revision, branch, goversion from which node_exporter was built, and the goos and goarch for the build.
# TYPE node_exporter_build_info gauge
node_exporter_build_info{branch="HEAD",goarch="arm64",goos="linux",goversion="go1.22.5",revision="f1e0e8360aa60b6cb5e5cc1560bed348fc2c1895",tags="unknown",version="1.8.2"} 1
# HELP node_filefd_allocated File descriptor statistics: allocated.
# TYPE node_filefd_allocated gauge
node_filefd_allocated 1664
# HELP node_filefd_maximum File descriptor statistics: maximum.
# TYPE node_filefd_maximum gauge
node_filefd_maximum 88281
# HELP node_filesystem_avail_bytes Filesystem space available to non-root users in bytes.
# TYPE node_filesystem_avail_bytes gauge
node_filesystem_avail_bytes{device="/dev/mapper/other_enc",device_error="",fstype="ext4",mountpoint="/data/other"} 4.140544e+07
node_filesystem_avail_bytes{device="/dev/mapper/other_enc",device_error="",fstype="ext4",mountpoint="/data/other/docker"} 4.140544e+07
node_filesystem_avail_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/data/etc"} 4.027392e+06
node_filesystem_avail_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/.baidupan"} 4.027392e+06
node_filesystem_avail_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/config"} 4.027392e+06
node_filesystem_avail_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/crontabs"} 4.027392e+06
node_filesystem_avail_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/datacenterconfig"} 4.027392e+06
node_filesystem_avail_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/mipctl"} 4.027392e+06
node_filesystem_avail_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/parentalctl"} 4.027392e+06
node_filesystem_avail_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/ppp"} 4.027392e+06
node_filesystem_avail_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/smartcontroller"} 4.027392e+06
node_filesystem_avail_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/smartvpn"} 4.027392e+06
node_filesystem_avail_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/tmp/sec_cfg/etc"} 4.027392e+06
node_filesystem_avail_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/cfg"} 0
node_filesystem_avail_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/etc"} 0
node_filesystem_avail_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/ini"} 0
node_filesystem_avail_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/lib/firmware/qcn9224"} 0
node_filesystem_avail_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/lib/wifi"} 0
node_filesystem_avail_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/mnt"} 0
node_filesystem_avail_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/vendor"} 0
node_filesystem_avail_bytes{device="tmpfs",device_error="",fstype="tmpfs",mountpoint="/tmp"} 4.08403968e+08
node_filesystem_avail_bytes{device="ubi24:cfg",device_error="",fstype="ubifs",mountpoint="/data"} 884736
node_filesystem_avail_bytes{device="ubi24:plugin",device_error="",fstype="ubifs",mountpoint="/data/userdisk"} 8.572928e+06
node_filesystem_avail_bytes{device="ubi24:plugin",device_error="",fstype="ubifs",mountpoint="/userdisk"} 8.572928e+06
node_filesystem_avail_bytes{device="ubi24:user",device_error="",fstype="ubifs",mountpoint="/data/usr"} 4.378624e+06
node_filesystem_avail_bytes{device="ubi28_0",device_error="",fstype="ubifs",mountpoint="/data/other_vol"} 3.641344e+07
# HELP node_filesystem_device_error Whether an error occurred while getting statistics for the given device.
# TYPE node_filesystem_device_error gauge
node_filesystem_device_error{device="/dev/mapper/other_enc",device_error="",fstype="ext4",mountpoint="/data/other"} 0
node_filesystem_device_error{device="/dev/mapper/other_enc",device_error="",fstype="ext4",mountpoint="/data/other/docker"} 0
node_filesystem_device_error{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/data/etc"} 0
node_filesystem_device_error{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/.baidupan"} 0
node_filesystem_device_error{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/config"} 0
node_filesystem_device_error{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/crontabs"} 0
node_filesystem_device_error{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/datacenterconfig"} 0
node_filesystem_device_error{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/mipctl"} 0
node_filesystem_device_error{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/parentalctl"} 0
node_filesystem_device_error{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/ppp"} 0
node_filesystem_device_error{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/smartcontroller"} 0
node_filesystem_device_error{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/smartvpn"} 0
node_filesystem_device_error{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/tmp/sec_cfg/etc"} 0
node_filesystem_device_error{device="none",device_error="",fstype="ramfs",mountpoint="/cfg"} 0
node_filesystem_device_error{device="none",device_error="",fstype="ramfs",mountpoint="/etc"} 0
node_filesystem_device_error{device="none",device_error="",fstype="ramfs",mountpoint="/ini"} 0
node_filesystem_device_error{device="none",device_error="",fstype="ramfs",mountpoint="/lib/firmware/qcn9224"} 0
node_filesystem_device_error{device="none",device_error="",fstype="ramfs",mountpoint="/lib/wifi"} 0
node_filesystem_device_error{device="none",device_error="",fstype="ramfs",mountpoint="/mnt"} 0
node_filesystem_device_error{device="none",device_error="",fstype="ramfs",mountpoint="/vendor"} 0
node_filesystem_device_error{device="tmpfs",device_error="",fstype="tmpfs",mountpoint="/tmp"} 0
node_filesystem_device_error{device="ubi24:cfg",device_error="",fstype="ubifs",mountpoint="/data"} 0
node_filesystem_device_error{device="ubi24:plugin",device_error="",fstype="ubifs",mountpoint="/data/userdisk"} 0
node_filesystem_device_error{device="ubi24:plugin",device_error="",fstype="ubifs",mountpoint="/userdisk"} 0
node_filesystem_device_error{device="ubi24:user",device_error="",fstype="ubifs",mountpoint="/data/usr"} 0
node_filesystem_device_error{device="ubi28_0",device_error="",fstype="ubifs",mountpoint="/data/other_vol"} 0
# HELP node_filesystem_files Filesystem total file nodes.
# TYPE node_filesystem_files gauge
node_filesystem_files{device="/dev/mapper/other_enc",device_error="",fstype="ext4",mountpoint="/data/other"} 48384
node_filesystem_files{device="/dev/mapper/other_enc",device_error="",fstype="ext4",mountpoint="/data/other/docker"} 48384
node_filesystem_files{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/data/etc"} 1792
node_filesystem_files{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/.baidupan"} 1792
node_filesystem_files{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/config"} 1792
node_filesystem_files{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/crontabs"} 1792
node_filesystem_files{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/datacenterconfig"} 1792
node_filesystem_files{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/mipctl"} 1792
node_filesystem_files{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/parentalctl"} 1792
node_filesystem_files{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/ppp"} 1792
node_filesystem_files{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/smartcontroller"} 1792
node_filesystem_files{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/smartvpn"} 1792
node_filesystem_files{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/tmp/sec_cfg/etc"} 1792
node_filesystem_files{device="none",device_error="",fstype="ramfs",mountpoint="/cfg"} 0
node_filesystem_files{device="none",device_error="",fstype="ramfs",mountpoint="/etc"} 0
node_filesystem_files{device="none",device_error="",fstype="ramfs",mountpoint="/ini"} 0
node_filesystem_files{device="none",device_error="",fstype="ramfs",mountpoint="/lib/firmware/qcn9224"} 0
node_filesystem_files{device="none",device_error="",fstype="ramfs",mountpoint="/lib/wifi"} 0
node_filesystem_files{device="none",device_error="",fstype="ramfs",mountpoint="/mnt"} 0
node_filesystem_files{device="none",device_error="",fstype="ramfs",mountpoint="/vendor"} 0
node_filesystem_files{device="tmpfs",device_error="",fstype="tmpfs",mountpoint="/tmp"} 110494
node_filesystem_files{device="ubi24:cfg",device_error="",fstype="ubifs",mountpoint="/data"} 0
node_filesystem_files{device="ubi24:plugin",device_error="",fstype="ubifs",mountpoint="/data/userdisk"} 0
node_filesystem_files{device="ubi24:plugin",device_error="",fstype="ubifs",mountpoint="/userdisk"} 0
node_filesystem_files{device="ubi24:user",device_error="",fstype="ubifs",mountpoint="/data/usr"} 0
node_filesystem_files{device="ubi28_0",device_error="",fstype="ubifs",mountpoint="/data/other_vol"} 0
# HELP node_filesystem_files_free Filesystem total free file nodes.
# TYPE node_filesystem_files_free gauge
node_filesystem_files_free{device="/dev/mapper/other_enc",device_error="",fstype="ext4",mountpoint="/data/other"} 46215
node_filesystem_files_free{device="/dev/mapper/other_enc",device_error="",fstype="ext4",mountpoint="/data/other/docker"} 46215
node_filesystem_files_free{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/data/etc"} 1558
node_filesystem_files_free{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/.baidupan"} 1558
node_filesystem_files_free{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/config"} 1558
node_filesystem_files_free{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/crontabs"} 1558
node_filesystem_files_free{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/datacenterconfig"} 1558
node_filesystem_files_free{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/mipctl"} 1558
node_filesystem_files_free{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/parentalctl"} 1558
node_filesystem_files_free{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/ppp"} 1558
node_filesystem_files_free{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/smartcontroller"} 1558
node_filesystem_files_free{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/smartvpn"} 1558
node_filesystem_files_free{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/tmp/sec_cfg/etc"} 1558
node_filesystem_files_free{device="none",device_error="",fstype="ramfs",mountpoint="/cfg"} 0
node_filesystem_files_free{device="none",device_error="",fstype="ramfs",mountpoint="/etc"} 0
node_filesystem_files_free{device="none",device_error="",fstype="ramfs",mountpoint="/ini"} 0
node_filesystem_files_free{device="none",device_error="",fstype="ramfs",mountpoint="/lib/firmware/qcn9224"} 0
node_filesystem_files_free{device="none",device_error="",fstype="ramfs",mountpoint="/lib/wifi"} 0
node_filesystem_files_free{device="none",device_error="",fstype="ramfs",mountpoint="/mnt"} 0
node_filesystem_files_free{device="none",device_error="",fstype="ramfs",mountpoint="/vendor"} 0
node_filesystem_files_free{device="tmpfs",device_error="",fstype="tmpfs",mountpoint="/tmp"} 110107
node_filesystem_files_free{device="ubi24:cfg",device_error="",fstype="ubifs",mountpoint="/data"} 0
node_filesystem_files_free{device="ubi24:plugin",device_error="",fstype="ubifs",mountpoint="/data/userdisk"} 0
node_filesystem_files_free{device="ubi24:plugin",device_error="",fstype="ubifs",mountpoint="/userdisk"} 0
node_filesystem_files_free{device="ubi24:user",device_error="",fstype="ubifs",mountpoint="/data/usr"} 0
node_filesystem_files_free{device="ubi28_0",device_error="",fstype="ubifs",mountpoint="/data/other_vol"} 0
# HELP node_filesystem_free_bytes Filesystem free space in bytes.
# TYPE node_filesystem_free_bytes gauge
node_filesystem_free_bytes{device="/dev/mapper/other_enc",device_error="",fstype="ext4",mountpoint="/data/other"} 5.5276544e+07
node_filesystem_free_bytes{device="/dev/mapper/other_enc",device_error="",fstype="ext4",mountpoint="/data/other/docker"} 5.5276544e+07
node_filesystem_free_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/data/etc"} 4.540416e+06
node_filesystem_free_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/.baidupan"} 4.540416e+06
node_filesystem_free_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/config"} 4.540416e+06
node_filesystem_free_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/crontabs"} 4.540416e+06
node_filesystem_free_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/datacenterconfig"} 4.540416e+06
node_filesystem_free_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/mipctl"} 4.540416e+06
node_filesystem_free_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/parentalctl"} 4.540416e+06
node_filesystem_free_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/ppp"} 4.540416e+06
node_filesystem_free_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/smartcontroller"} 4.540416e+06
node_filesystem_free_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/smartvpn"} 4.540416e+06
node_filesystem_free_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/tmp/sec_cfg/etc"} 4.540416e+06
node_filesystem_free_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/cfg"} 0
node_filesystem_free_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/etc"} 0
node_filesystem_free_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/ini"} 0
node_filesystem_free_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/lib/firmware/qcn9224"} 0
node_filesystem_free_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/lib/wifi"} 0
node_filesystem_free_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/mnt"} 0
node_filesystem_free_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/vendor"} 0
node_filesystem_free_bytes{device="tmpfs",device_error="",fstype="tmpfs",mountpoint="/tmp"} 4.08403968e+08
node_filesystem_free_bytes{device="ubi24:cfg",device_error="",fstype="ubifs",mountpoint="/data"} 1.425408e+06
node_filesystem_free_bytes{device="ubi24:plugin",device_error="",fstype="ubifs",mountpoint="/data/userdisk"} 9.076736e+06
node_filesystem_free_bytes{device="ubi24:plugin",device_error="",fstype="ubifs",mountpoint="/userdisk"} 9.076736e+06
node_filesystem_free_bytes{device="ubi24:user",device_error="",fstype="ubifs",mountpoint="/data/usr"} 4.919296e+06
node_filesystem_free_bytes{device="ubi28_0",device_error="",fstype="ubifs",mountpoint="/data/other_vol"} 4.1365504e+07
# HELP node_filesystem_readonly Filesystem read-only status.
# TYPE node_filesystem_readonly gauge
node_filesystem_readonly{device="/dev/mapper/other_enc",device_error="",fstype="ext4",mountpoint="/data/other"} 0
node_filesystem_readonly{device="/dev/mapper/other_enc",device_error="",fstype="ext4",mountpoint="/data/other/docker"} 0
node_filesystem_readonly{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/data/etc"} 0
node_filesystem_readonly{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/.baidupan"} 0
node_filesystem_readonly{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/config"} 0
node_filesystem_readonly{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/crontabs"} 0
node_filesystem_readonly{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/datacenterconfig"} 0
node_filesystem_readonly{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/mipctl"} 0
node_filesystem_readonly{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/parentalctl"} 0
node_filesystem_readonly{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/ppp"} 0
node_filesystem_readonly{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/smartcontroller"} 0
node_filesystem_readonly{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/smartvpn"} 0
node_filesystem_readonly{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/tmp/sec_cfg/etc"} 0
node_filesystem_readonly{device="none",device_error="",fstype="ramfs",mountpoint="/cfg"} 0
node_filesystem_readonly{device="none",device_error="",fstype="ramfs",mountpoint="/etc"} 0
node_filesystem_readonly{device="none",device_error="",fstype="ramfs",mountpoint="/ini"} 0
node_filesystem_readonly{device="none",device_error="",fstype="ramfs",mountpoint="/lib/firmware/qcn9224"} 0
node_filesystem_readonly{device="none",device_error="",fstype="ramfs",mountpoint="/lib/wifi"} 0
node_filesystem_readonly{device="none",device_error="",fstype="ramfs",mountpoint="/mnt"} 0
node_filesystem_readonly{device="none",device_error="",fstype="ramfs",mountpoint="/vendor"} 0
node_filesystem_readonly{device="tmpfs",device_error="",fstype="tmpfs",mountpoint="/tmp"} 0
node_filesystem_readonly{device="ubi24:cfg",device_error="",fstype="ubifs",mountpoint="/data"} 0
node_filesystem_readonly{device="ubi24:plugin",device_error="",fstype="ubifs",mountpoint="/data/userdisk"} 0
node_filesystem_readonly{device="ubi24:plugin",device_error="",fstype="ubifs",mountpoint="/userdisk"} 0
node_filesystem_readonly{device="ubi24:user",device_error="",fstype="ubifs",mountpoint="/data/usr"} 0
node_filesystem_readonly{device="ubi28_0",device_error="",fstype="ubifs",mountpoint="/data/other_vol"} 0
# HELP node_filesystem_size_bytes Filesystem size in bytes.
# TYPE node_filesystem_size_bytes gauge
node_filesystem_size_bytes{device="/dev/mapper/other_enc",device_error="",fstype="ext4",mountpoint="/data/other"} 1.8614784e+08
node_filesystem_size_bytes{device="/dev/mapper/other_enc",device_error="",fstype="ext4",mountpoint="/data/other/docker"} 1.8614784e+08
node_filesystem_size_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/data/etc"} 5.996544e+06
node_filesystem_size_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/.baidupan"} 5.996544e+06
node_filesystem_size_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/config"} 5.996544e+06
node_filesystem_size_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/crontabs"} 5.996544e+06
node_filesystem_size_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/datacenterconfig"} 5.996544e+06
node_filesystem_size_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/mipctl"} 5.996544e+06
node_filesystem_size_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/parentalctl"} 5.996544e+06
node_filesystem_size_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/ppp"} 5.996544e+06
node_filesystem_size_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/smartcontroller"} 5.996544e+06
node_filesystem_size_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/etc/smartvpn"} 5.996544e+06
node_filesystem_size_bytes{device="/dev/mapper/sec_cfg",device_error="",fstype="ext4",mountpoint="/tmp/sec_cfg/etc"} 5.996544e+06
node_filesystem_size_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/cfg"} 0
node_filesystem_size_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/etc"} 0
node_filesystem_size_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/ini"} 0
node_filesystem_size_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/lib/firmware/qcn9224"} 0
node_filesystem_size_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/lib/wifi"} 0
node_filesystem_size_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/mnt"} 0
node_filesystem_size_bytes{device="none",device_error="",fstype="ramfs",mountpoint="/vendor"} 0
node_filesystem_size_bytes{device="tmpfs",device_error="",fstype="tmpfs",mountpoint="/tmp"} 4.52583424e+08
node_filesystem_size_bytes{device="ubi24:cfg",device_error="",fstype="ubifs",mountpoint="/data"} 9.863168e+06
node_filesystem_size_bytes{device="ubi24:plugin",device_error="",fstype="ubifs",mountpoint="/data/userdisk"} 9.158656e+06
node_filesystem_size_bytes{device="ubi24:plugin",device_error="",fstype="ubifs",mountpoint="/userdisk"} 9.158656e+06
node_filesystem_size_bytes{device="ubi24:user",device_error="",fstype="ubifs",mountpoint="/data/usr"} 9.863168e+06
node_filesystem_size_bytes{device="ubi28_0",device_error="",fstype="ubifs",mountpoint="/data/other_vol"} 2.25599488e+08
# HELP node_forks_total Total number of forks.
# TYPE node_forks_total counter
node_forks_total 643675
# HELP node_intr_total Total number of interrupts serviced.
# TYPE node_intr_total counter
node_intr_total 1.62927024e+08
# HELP node_load1 1m load average.
# TYPE node_load1 gauge
node_load1 1.08
# HELP node_load15 15m load average.
# TYPE node_load15 gauge
node_load15 1.16
# HELP node_load5 5m load average.
# TYPE node_load5 gauge
node_load5 1.13
# HELP node_memory_Active_anon_bytes Memory information field Active_anon_bytes.
# TYPE node_memory_Active_anon_bytes gauge
node_memory_Active_anon_bytes 1.3510656e+08
# HELP node_memory_Active_bytes Memory information field Active_bytes.
# TYPE node_memory_Active_bytes gauge
node_memory_Active_bytes 3.10157312e+08
# HELP node_memory_Active_file_bytes Memory information field Active_file_bytes.
# TYPE node_memory_Active_file_bytes gauge
node_memory_Active_file_bytes 1.75050752e+08
# HELP node_memory_AnonPages_bytes Memory information field AnonPages_bytes.
# TYPE node_memory_AnonPages_bytes gauge
node_memory_AnonPages_bytes 9.7173504e+07
# HELP node_memory_Bounce_bytes Memory information field Bounce_bytes.
# TYPE node_memory_Bounce_bytes gauge
node_memory_Bounce_bytes 0
# HELP node_memory_Buffers_bytes Memory information field Buffers_bytes.
# TYPE node_memory_Buffers_bytes gauge
node_memory_Buffers_bytes 5.8310656e+07
# HELP node_memory_Cached_bytes Memory information field Cached_bytes.
# TYPE node_memory_Cached_bytes gauge
node_memory_Cached_bytes 3.45944064e+08
# HELP node_memory_CommitLimit_bytes Memory information field CommitLimit_bytes.
# TYPE node_memory_CommitLimit_bytes gauge
node_memory_CommitLimit_bytes 4.52583424e+08
# HELP node_memory_Committed_AS_bytes Memory information field Committed_AS_bytes.
# TYPE node_memory_Committed_AS_bytes gauge
node_memory_Committed_AS_bytes 8.09234432e+08
# HELP node_memory_Dirty_bytes Memory information field Dirty_bytes.
# TYPE node_memory_Dirty_bytes gauge
node_memory_Dirty_bytes 12288
# HELP node_memory_Inactive_anon_bytes Memory information field Inactive_anon_bytes.
# TYPE node_memory_Inactive_anon_bytes gauge
node_memory_Inactive_anon_bytes 6.619136e+06
# HELP node_memory_Inactive_bytes Memory information field Inactive_bytes.
# TYPE node_memory_Inactive_bytes gauge
node_memory_Inactive_bytes 1.86376192e+08
# HELP node_memory_Inactive_file_bytes Memory information field Inactive_file_bytes.
# TYPE node_memory_Inactive_file_bytes gauge
node_memory_Inactive_file_bytes 1.79757056e+08
# HELP node_memory_KReclaimable_bytes Memory information field KReclaimable_bytes.
# TYPE node_memory_KReclaimable_bytes gauge
node_memory_KReclaimable_bytes 2.5612288e+07
# HELP node_memory_KernelStack_bytes Memory information field KernelStack_bytes.
# TYPE node_memory_KernelStack_bytes gauge
node_memory_KernelStack_bytes 5.65248e+06
# HELP node_memory_Mapped_bytes Memory information field Mapped_bytes.
# TYPE node_memory_Mapped_bytes gauge
node_memory_Mapped_bytes 1.52682496e+08
# HELP node_memory_MemAvailable_bytes Memory information field MemAvailable_bytes.
# TYPE node_memory_MemAvailable_bytes gauge
node_memory_MemAvailable_bytes 3.8068224e+08
# HELP node_memory_MemFree_bytes Memory information field MemFree_bytes.
# TYPE node_memory_MemFree_bytes gauge
node_memory_MemFree_bytes 5.9203584e+07
# HELP node_memory_MemTotal_bytes Memory information field MemTotal_bytes.
# TYPE node_memory_MemTotal_bytes gauge
node_memory_MemTotal_bytes 9.05170944e+08
# HELP node_memory_Mlocked_bytes Memory information field Mlocked_bytes.
# TYPE node_memory_Mlocked_bytes gauge
node_memory_Mlocked_bytes 0
# HELP node_memory_NFS_Unstable_bytes Memory information field NFS_Unstable_bytes.
# TYPE node_memory_NFS_Unstable_bytes gauge
node_memory_NFS_Unstable_bytes 0
# HELP node_memory_PageTables_bytes Memory information field PageTables_bytes.
# TYPE node_memory_PageTables_bytes gauge
node_memory_PageTables_bytes 3.059712e+06
# HELP node_memory_Percpu_bytes Memory information field Percpu_bytes.
# TYPE node_memory_Percpu_bytes gauge
node_memory_Percpu_bytes 1.441792e+06
# HELP node_memory_SReclaimable_bytes Memory information field SReclaimable_bytes.
# TYPE node_memory_SReclaimable_bytes gauge
node_memory_SReclaimable_bytes 2.5612288e+07
# HELP node_memory_SUnreclaim_bytes Memory information field SUnreclaim_bytes.
# TYPE node_memory_SUnreclaim_bytes gauge
node_memory_SUnreclaim_bytes 2.28347904e+08
# HELP node_memory_Shmem_bytes Memory information field Shmem_bytes.
# TYPE node_memory_Shmem_bytes gauge
node_memory_Shmem_bytes 4.4568576e+07
# HELP node_memory_Slab_bytes Memory information field Slab_bytes.
# TYPE node_memory_Slab_bytes gauge
node_memory_Slab_bytes 2.53960192e+08
# HELP node_memory_SwapCached_bytes Memory information field SwapCached_bytes.
# TYPE node_memory_SwapCached_bytes gauge
node_memory_SwapCached_bytes 0
# HELP node_memory_SwapFree_bytes Memory information field SwapFree_bytes.
# TYPE node_memory_SwapFree_bytes gauge
node_memory_SwapFree_bytes 0
# HELP node_memory_SwapTotal_bytes Memory information field SwapTotal_bytes.
# TYPE node_memory_SwapTotal_bytes gauge
node_memory_SwapTotal_bytes 0
# HELP node_memory_Unevictable_bytes Memory information field Unevictable_bytes.
# TYPE node_memory_Unevictable_bytes gauge
node_memory_Unevictable_bytes 4.878336e+06
# HELP node_memory_VmallocChunk_bytes Memory information field VmallocChunk_bytes.
# TYPE node_memory_VmallocChunk_bytes gauge
node_memory_VmallocChunk_bytes 0
# HELP node_memory_VmallocTotal_bytes Memory information field VmallocTotal_bytes.
# TYPE node_memory_VmallocTotal_bytes gauge
node_memory_VmallocTotal_bytes 2.69240696832e+11
# HELP node_memory_VmallocUsed_bytes Memory information field VmallocUsed_bytes.
# TYPE node_memory_VmallocUsed_bytes gauge
node_memory_VmallocUsed_bytes 3.090432e+07
# HELP node_memory_WritebackTmp_bytes Memory information field WritebackTmp_bytes.
# TYPE node_memory_WritebackTmp_bytes gauge
node_memory_WritebackTmp_bytes 0
# HELP node_memory_Writeback_bytes Memory information field Writeback_bytes.
# TYPE node_memory_Writeback_bytes gauge
node_memory_Writeback_bytes 0
# HELP node_netstat_Icmp6_InErrors Statistic Icmp6InErrors.
# TYPE node_netstat_Icmp6_InErrors untyped
node_netstat_Icmp6_InErrors 0
# HELP node_netstat_Icmp6_InMsgs Statistic Icmp6InMsgs.
# TYPE node_netstat_Icmp6_InMsgs untyped
node_netstat_Icmp6_InMsgs 11665
# HELP node_netstat_Icmp6_OutMsgs Statistic Icmp6OutMsgs.
# TYPE node_netstat_Icmp6_OutMsgs untyped
node_netstat_Icmp6_OutMsgs 11617
# HELP node_netstat_Icmp_InErrors Statistic IcmpInErrors.
# TYPE node_netstat_Icmp_InErrors untyped
node_netstat_Icmp_InErrors 7492
# HELP node_netstat_Icmp_InMsgs Statistic IcmpInMsgs.
# TYPE node_netstat_Icmp_InMsgs untyped
node_netstat_Icmp_InMsgs 34619
# HELP node_netstat_Icmp_OutMsgs Statistic IcmpOutMsgs.
# TYPE node_netstat_Icmp_OutMsgs untyped
node_netstat_Icmp_OutMsgs 66668
# HELP node_netstat_Ip6_InOctets Statistic Ip6InOctets.
# TYPE node_netstat_Ip6_InOctets untyped
node_netstat_Ip6_InOctets 6.165031e+06
# HELP node_netstat_Ip6_OutOctets Statistic Ip6OutOctets.
# TYPE node_netstat_Ip6_OutOctets untyped
node_netstat_Ip6_OutOctets 4.523192e+06
# HELP node_netstat_IpExt_InOctets Statistic IpExtInOctets.
# TYPE node_netstat_IpExt_InOctets untyped
node_netstat_IpExt_InOctets 1.1321240738e+10
# HELP node_netstat_IpExt_OutOctets Statistic IpExtOutOctets.
# TYPE node_netstat_IpExt_OutOctets untyped
node_netstat_IpExt_OutOctets 1.2323752644e+10
# HELP node_netstat_Ip_Forwarding Statistic IpForwarding.
# TYPE node_netstat_Ip_Forwarding untyped
node_netstat_Ip_Forwarding 1
# HELP node_netstat_TcpExt_ListenDrops Statistic TcpExtListenDrops.
# TYPE node_netstat_TcpExt_ListenDrops untyped
node_netstat_TcpExt_ListenDrops 5
# HELP node_netstat_TcpExt_ListenOverflows Statistic TcpExtListenOverflows.
# TYPE node_netstat_TcpExt_ListenOverflows untyped
node_netstat_TcpExt_ListenOverflows 5
# HELP node_netstat_TcpExt_SyncookiesFailed Statistic TcpExtSyncookiesFailed.
# TYPE node_netstat_TcpExt_SyncookiesFailed untyped
node_netstat_TcpExt_SyncookiesFailed 0
# HELP node_netstat_TcpExt_SyncookiesRecv Statistic TcpExtSyncookiesRecv.
# TYPE node_netstat_TcpExt_SyncookiesRecv untyped
node_netstat_TcpExt_SyncookiesRecv 36
# HELP node_netstat_TcpExt_SyncookiesSent Statistic TcpExtSyncookiesSent.
# TYPE node_netstat_TcpExt_SyncookiesSent untyped
node_netstat_TcpExt_SyncookiesSent 33
# HELP node_netstat_TcpExt_TCPOFOQueue Statistic TcpExtTCPOFOQueue.
# TYPE node_netstat_TcpExt_TCPOFOQueue untyped
node_netstat_TcpExt_TCPOFOQueue 546269
# HELP node_netstat_TcpExt_TCPSynRetrans Statistic TcpExtTCPSynRetrans.
# TYPE node_netstat_TcpExt_TCPSynRetrans untyped
node_netstat_TcpExt_TCPSynRetrans 853
# HELP node_netstat_TcpExt_TCPTimeouts Statistic TcpExtTCPTimeouts.
# TYPE node_netstat_TcpExt_TCPTimeouts untyped
node_netstat_TcpExt_TCPTimeouts 4331
# HELP node_netstat_Tcp_ActiveOpens Statistic TcpActiveOpens.
# TYPE node_netstat_Tcp_ActiveOpens untyped
node_netstat_Tcp_ActiveOpens 98015
# HELP node_netstat_Tcp_CurrEstab Statistic TcpCurrEstab.
# TYPE node_netstat_Tcp_CurrEstab untyped
node_netstat_Tcp_CurrEstab 74
# HELP node_netstat_Tcp_InErrs Statistic TcpInErrs.
# TYPE node_netstat_Tcp_InErrs untyped
node_netstat_Tcp_InErrs 60
# HELP node_netstat_Tcp_InSegs Statistic TcpInSegs.
# TYPE node_netstat_Tcp_InSegs untyped
node_netstat_Tcp_InSegs 9.360884e+06
# HELP node_netstat_Tcp_OutRsts Statistic TcpOutRsts.
# TYPE node_netstat_Tcp_OutRsts untyped
node_netstat_Tcp_OutRsts 4439
# HELP node_netstat_Tcp_OutSegs Statistic TcpOutSegs.
# TYPE node_netstat_Tcp_OutSegs untyped
node_netstat_Tcp_OutSegs 1.0225774e+07
# HELP node_netstat_Tcp_PassiveOpens Statistic TcpPassiveOpens.
# TYPE node_netstat_Tcp_PassiveOpens untyped
node_netstat_Tcp_PassiveOpens 36293
# HELP node_netstat_Tcp_RetransSegs Statistic TcpRetransSegs.
# TYPE node_netstat_Tcp_RetransSegs untyped
node_netstat_Tcp_RetransSegs 10384
# HELP node_netstat_Udp6_InDatagrams Statistic Udp6InDatagrams.
# TYPE node_netstat_Udp6_InDatagrams untyped
node_netstat_Udp6_InDatagrams 27695
# HELP node_netstat_Udp6_InErrors Statistic Udp6InErrors.
# TYPE node_netstat_Udp6_InErrors untyped
node_netstat_Udp6_InErrors 0
# HELP node_netstat_Udp6_NoPorts Statistic Udp6NoPorts.
# TYPE node_netstat_Udp6_NoPorts untyped
node_netstat_Udp6_NoPorts 11514
# HELP node_netstat_Udp6_OutDatagrams Statistic Udp6OutDatagrams.
# TYPE node_netstat_Udp6_OutDatagrams untyped
node_netstat_Udp6_OutDatagrams 34334
# HELP node_netstat_Udp6_RcvbufErrors Statistic Udp6RcvbufErrors.
# TYPE node_netstat_Udp6_RcvbufErrors untyped
node_netstat_Udp6_RcvbufErrors 0
# HELP node_netstat_Udp6_SndbufErrors Statistic Udp6SndbufErrors.
# TYPE node_netstat_Udp6_SndbufErrors untyped
node_netstat_Udp6_SndbufErrors 0
# HELP node_netstat_UdpLite6_InErrors Statistic UdpLite6InErrors.
# TYPE node_netstat_UdpLite6_InErrors untyped
node_netstat_UdpLite6_InErrors 0
# HELP node_netstat_UdpLite_InErrors Statistic UdpLiteInErrors.
# TYPE node_netstat_UdpLite_InErrors untyped
node_netstat_UdpLite_InErrors 0
# HELP node_netstat_Udp_InDatagrams Statistic UdpInDatagrams.
# TYPE node_netstat_Udp_InDatagrams untyped
node_netstat_Udp_InDatagrams 970781
# HELP node_netstat_Udp_InErrors Statistic UdpInErrors.
# TYPE node_netstat_Udp_InErrors untyped
node_netstat_Udp_InErrors 0
# HELP node_netstat_Udp_NoPorts Statistic UdpNoPorts.
# TYPE node_netstat_Udp_NoPorts untyped
node_netstat_Udp_NoPorts 39618
# HELP node_netstat_Udp_OutDatagrams Statistic UdpOutDatagrams.
# TYPE node_netstat_Udp_OutDatagrams untyped
node_netstat_Udp_OutDatagrams 377123
# HELP node_netstat_Udp_RcvbufErrors Statistic UdpRcvbufErrors.
# TYPE node_netstat_Udp_RcvbufErrors untyped
node_netstat_Udp_RcvbufErrors 0
# HELP node_netstat_Udp_SndbufErrors Statistic UdpSndbufErrors.
# TYPE node_netstat_Udp_SndbufErrors untyped
node_netstat_Udp_SndbufErrors 0
# HELP node_network_address_assign_type Network device property: address_assign_type
# TYPE node_network_address_assign_type gauge
node_network_address_assign_type{device="bhap_mld0"} 3
node_network_address_assign_type{device="bhsta_mld0"} 3
node_network_address_assign_type{device="bond0"} 1
node_network_address_assign_type{device="br-docker"} 1
node_network_address_assign_type{device="br-lan"} 3
node_network_address_assign_type{device="br-miot"} 3
node_network_address_assign_type{device="erspan0"} 0
node_network_address_assign_type{device="eth0"} 0
node_network_address_assign_type{device="eth0.1"} 2
node_network_address_assign_type{device="eth0.2"} 2
node_network_address_assign_type{device="eth1"} 0
node_network_address_assign_type{device="eth1.3"} 2
node_network_address_assign_type{device="eth1.4"} 3
node_network_address_assign_type{device="gre0"} 0
node_network_address_assign_type{device="gretap0"} 0
node_network_address_assign_type{device="hostap_mld0"} 3
node_network_address_assign_type{device="ip6gre0"} 1
node_network_address_assign_type{device="ip6tnl0"} 1
node_network_address_assign_type{device="lo"} 0
node_network_address_assign_type{device="miireg"} 0
node_network_address_assign_type{device="mld-wifi0"} 0
node_network_address_assign_type{device="pppoe-wan"} 0
node_network_address_assign_type{device="sit0"} 0
node_network_address_assign_type{device="soc0"} 0
node_network_address_assign_type{device="soc1"} 0
node_network_address_assign_type{device="wifi0"} 0
node_network_address_assign_type{device="wifi1"} 0
node_network_address_assign_type{device="wl0"} 0
node_network_address_assign_type{device="wl1"} 0
node_network_address_assign_type{device="wl13"} 0
node_network_address_assign_type{device="wl4"} 0
node_network_address_assign_type{device="wl5"} 0
# HELP node_network_carrier Network device property: carrier
# TYPE node_network_carrier gauge
node_network_carrier{device="bhap_mld0"} 1
node_network_carrier{device="bhsta_mld0"} 0
node_network_carrier{device="br-docker"} 0
node_network_carrier{device="br-lan"} 1
node_network_carrier{device="br-miot"} 1
node_network_carrier{device="eth0"} 1
node_network_carrier{device="eth0.1"} 1
node_network_carrier{device="eth0.2"} 1
node_network_carrier{device="eth1"} 1
node_network_carrier{device="eth1.3"} 1
node_network_carrier{device="eth1.4"} 1
node_network_carrier{device="hostap_mld0"} 0
node_network_carrier{device="lo"} 1
node_network_carrier{device="pppoe-wan"} 1
node_network_carrier{device="wifi0"} 1
node_network_carrier{device="wifi1"} 1
node_network_carrier{device="wl0"} 1
node_network_carrier{device="wl1"} 1
node_network_carrier{device="wl13"} 1
node_network_carrier{device="wl4"} 1
node_network_carrier{device="wl5"} 1
# HELP node_network_carrier_changes_total Network device property: carrier_changes_total
# TYPE node_network_carrier_changes_total counter
node_network_carrier_changes_total{device="bhap_mld0"} 2
node_network_carrier_changes_total{device="bhsta_mld0"} 1
node_network_carrier_changes_total{device="bond0"} 1
node_network_carrier_changes_total{device="br-docker"} 5
node_network_carrier_changes_total{device="br-lan"} 2
node_network_carrier_changes_total{device="br-miot"} 2
node_network_carrier_changes_total{device="erspan0"} 0
node_network_carrier_changes_total{device="eth0"} 0
node_network_carrier_changes_total{device="eth0.1"} 12
node_network_carrier_changes_total{device="eth0.2"} 2
node_network_carrier_changes_total{device="eth1"} 0
node_network_carrier_changes_total{device="eth1.3"} 2
node_network_carrier_changes_total{device="eth1.4"} 0
node_network_carrier_changes_total{device="gre0"} 0
node_network_carrier_changes_total{device="gretap0"} 0
node_network_carrier_changes_total{device="hostap_mld0"} 1
node_network_carrier_changes_total{device="ip6gre0"} 0
node_network_carrier_changes_total{device="ip6tnl0"} 0
node_network_carrier_changes_total{device="lo"} 0
node_network_carrier_changes_total{device="miireg"} 0
node_network_carrier_changes_total{device="mld-wifi0"} 0
node_network_carrier_changes_total{device="pppoe-wan"} 0
node_network_carrier_changes_total{device="sit0"} 0
node_network_carrier_changes_total{device="soc0"} 0
node_network_carrier_changes_total{device="soc1"} 0
node_network_carrier_changes_total{device="wifi0"} 0
node_network_carrier_changes_total{device="wifi1"} 0
node_network_carrier_changes_total{device="wl0"} 0
node_network_carrier_changes_total{device="wl1"} 0
node_network_carrier_changes_total{device="wl13"} 0
node_network_carrier_changes_total{device="wl4"} 0
node_network_carrier_changes_total{device="wl5"} 0
# HELP node_network_carrier_down_changes_total Network device property: carrier_down_changes_total
# TYPE node_network_carrier_down_changes_total counter
node_network_carrier_down_changes_total{device="bhap_mld0"} 1
node_network_carrier_down_changes_total{device="bhsta_mld0"} 1
node_network_carrier_down_changes_total{device="bond0"} 1
node_network_carrier_down_changes_total{device="br-docker"} 3
node_network_carrier_down_changes_total{device="br-lan"} 1
node_network_carrier_down_changes_total{device="br-miot"} 1
node_network_carrier_down_changes_total{device="erspan0"} 0
node_network_carrier_down_changes_total{device="eth0"} 0
node_network_carrier_down_changes_total{device="eth0.1"} 6
node_network_carrier_down_changes_total{device="eth0.2"} 1
node_network_carrier_down_changes_total{device="eth1"} 0
node_network_carrier_down_changes_total{device="eth1.3"} 1
node_network_carrier_down_changes_total{device="eth1.4"} 0
node_network_carrier_down_changes_total{device="gre0"} 0
node_network_carrier_down_changes_total{device="gretap0"} 0
node_network_carrier_down_changes_total{device="hostap_mld0"} 1
node_network_carrier_down_changes_total{device="ip6gre0"} 0
node_network_carrier_down_changes_total{device="ip6tnl0"} 0
node_network_carrier_down_changes_total{device="lo"} 0
node_network_carrier_down_changes_total{device="miireg"} 0
node_network_carrier_down_changes_total{device="mld-wifi0"} 0
node_network_carrier_down_changes_total{device="pppoe-wan"} 0
node_network_carrier_down_changes_total{device="sit0"} 0
node_network_carrier_down_changes_total{device="soc0"} 0
node_network_carrier_down_changes_total{device="soc1"} 0
node_network_carrier_down_changes_total{device="wifi0"} 0
node_network_carrier_down_changes_total{device="wifi1"} 0
node_network_carrier_down_changes_total{device="wl0"} 0
node_network_carrier_down_changes_total{device="wl1"} 0
node_network_carrier_down_changes_total{device="wl13"} 0
node_network_carrier_down_changes_total{device="wl4"} 0
node_network_carrier_down_changes_total{device="wl5"} 0
# HELP node_network_carrier_up_changes_total Network device property: carrier_up_changes_total
# TYPE node_network_carrier_up_changes_total counter
node_network_carrier_up_changes_total{device="bhap_mld0"} 1
node_network_carrier_up_changes_total{device="bhsta_mld0"} 0
node_network_carrier_up_changes_total{device="bond0"} 0
node_network_carrier_up_changes_total{device="br-docker"} 2
node_network_carrier_up_changes_total{device="br-lan"} 1
node_network_carrier_up_changes_total{device="br-miot"} 1
node_network_carrier_up_changes_total{device="erspan0"} 0
node_network_carrier_up_changes_total{device="eth0"} 0
node_network_carrier_up_changes_total{device="eth0.1"} 6
node_network_carrier_up_changes_total{device="eth0.2"} 1
node_network_carrier_up_changes_total{device="eth1"} 0
node_network_carrier_up_changes_total{device="eth1.3"} 1
node_network_carrier_up_changes_total{device="eth1.4"} 0
node_network_carrier_up_changes_total{device="gre0"} 0
node_network_carrier_up_changes_total{device="gretap0"} 0
node_network_carrier_up_changes_total{device="hostap_mld0"} 0
node_network_carrier_up_changes_total{device="ip6gre0"} 0
node_network_carrier_up_changes_total{device="ip6tnl0"} 0
node_network_carrier_up_changes_total{device="lo"} 0
node_network_carrier_up_changes_total{device="miireg"} 0
node_network_carrier_up_changes_total{device="mld-wifi0"} 0
node_network_carrier_up_changes_total{device="pppoe-wan"} 0
node_network_carrier_up_changes_total{device="sit0"} 0
node_network_carrier_up_changes_total{device="soc0"} 0
node_network_carrier_up_changes_total{device="soc1"} 0
node_network_carrier_up_changes_total{device="wifi0"} 0
node_network_carrier_up_changes_total{device="wifi1"} 0
node_network_carrier_up_changes_total{device="wl0"} 0
node_network_carrier_up_changes_total{device="wl1"} 0
node_network_carrier_up_changes_total{device="wl13"} 0
node_network_carrier_up_changes_total{device="wl4"} 0
node_network_carrier_up_changes_total{device="wl5"} 0
# HELP node_network_device_id Network device property: device_id
# TYPE node_network_device_id gauge
node_network_device_id{device="bhap_mld0"} 0
node_network_device_id{device="bhsta_mld0"} 0
node_network_device_id{device="bond0"} 0
node_network_device_id{device="br-docker"} 0
node_network_device_id{device="br-lan"} 0
node_network_device_id{device="br-miot"} 0
node_network_device_id{device="erspan0"} 0
node_network_device_id{device="eth0"} 0
node_network_device_id{device="eth0.1"} 0
node_network_device_id{device="eth0.2"} 0
node_network_device_id{device="eth1"} 0
node_network_device_id{device="eth1.3"} 0
node_network_device_id{device="eth1.4"} 0
node_network_device_id{device="gre0"} 0
node_network_device_id{device="gretap0"} 0
node_network_device_id{device="hostap_mld0"} 0
node_network_device_id{device="ip6gre0"} 0
node_network_device_id{device="ip6tnl0"} 0
node_network_device_id{device="lo"} 0
node_network_device_id{device="miireg"} 0
node_network_device_id{device="mld-wifi0"} 0
node_network_device_id{device="pppoe-wan"} 0
node_network_device_id{device="sit0"} 0
node_network_device_id{device="soc0"} 0
node_network_device_id{device="soc1"} 0
node_network_device_id{device="wifi0"} 0
node_network_device_id{device="wifi1"} 0
node_network_device_id{device="wl0"} 0
node_network_device_id{device="wl1"} 0
node_network_device_id{device="wl13"} 0
node_network_device_id{device="wl4"} 0
node_network_device_id{device="wl5"} 0
# HELP node_network_dormant Network device property: dormant
# TYPE node_network_dormant gauge
node_network_dormant{device="bhap_mld0"} 0
node_network_dormant{device="bhsta_mld0"} 0
node_network_dormant{device="br-docker"} 0
node_network_dormant{device="br-lan"} 0
node_network_dormant{device="br-miot"} 0
node_network_dormant{device="eth0"} 0
node_network_dormant{device="eth0.1"} 0
node_network_dormant{device="eth0.2"} 0
node_network_dormant{device="eth1"} 0
node_network_dormant{device="eth1.3"} 0
node_network_dormant{device="eth1.4"} 0
node_network_dormant{device="hostap_mld0"} 0
node_network_dormant{device="lo"} 0
node_network_dormant{device="pppoe-wan"} 0
node_network_dormant{device="wifi0"} 0
node_network_dormant{device="wifi1"} 0
node_network_dormant{device="wl0"} 0
node_network_dormant{device="wl1"} 0
node_network_dormant{device="wl13"} 0
node_network_dormant{device="wl4"} 0
node_network_dormant{device="wl5"} 0
# HELP node_network_flags Network device property: flags
# TYPE node_network_flags gauge
node_network_flags{device="bhap_mld0"} 5891
node_network_flags{device="bhsta_mld0"} 5123
node_network_flags{device="bond0"} 5122
node_network_flags{device="br-docker"} 4099
node_network_flags{device="br-lan"} 4099
node_network_flags{device="br-miot"} 4099
node_network_flags{device="erspan0"} 4098
node_network_flags{device="eth0"} 4867
node_network_flags{device="eth0.1"} 4867
node_network_flags{device="eth0.2"} 4867
node_network_flags{device="eth1"} 4867
node_network_flags{device="eth1.3"} 4867
node_network_flags{device="eth1.4"} 4099
node_network_flags{device="gre0"} 128
node_network_flags{device="gretap0"} 4098
node_network_flags{device="hostap_mld0"} 5123
node_network_flags{device="ip6gre0"} 128
node_network_flags{device="ip6tnl0"} 128
node_network_flags{device="lo"} 9
node_network_flags{device="miireg"} 0
node_network_flags{device="mld-wifi0"} 4098
node_network_flags{device="pppoe-wan"} 4241
node_network_flags{device="sit0"} 128
node_network_flags{device="soc0"} 0
node_network_flags{device="soc1"} 0
node_network_flags{device="wifi0"} 4931
node_network_flags{device="wifi1"} 4931
node_network_flags{device="wl0"} 4931
node_network_flags{device="wl1"} 4931
node_network_flags{device="wl13"} 4931
node_network_flags{device="wl4"} 6979
node_network_flags{device="wl5"} 6979
# HELP node_network_iface_id Network device property: iface_id
# TYPE node_network_iface_id gauge
node_network_iface_id{device="bhap_mld0"} 30
node_network_iface_id{device="bhsta_mld0"} 31
node_network_iface_id{device="bond0"} 2
node_network_iface_id{device="br-docker"} 22
node_network_iface_id{device="br-lan"} 23
node_network_iface_id{device="br-miot"} 36
node_network_iface_id{device="erspan0"} 10
node_network_iface_id{device="eth0"} 4
node_network_iface_id{device="eth0.1"} 24
node_network_iface_id{device="eth0.2"} 25
node_network_iface_id{device="eth1"} 5
node_network_iface_id{device="eth1.3"} 26
node_network_iface_id{device="eth1.4"} 32
node_network_iface_id{device="gre0"} 8
node_network_iface_id{device="gretap0"} 9
node_network_iface_id{device="hostap_mld0"} 29
node_network_iface_id{device="ip6gre0"} 11
node_network_iface_id{device="ip6tnl0"} 6
node_network_iface_id{device="lo"} 1
node_network_iface_id{device="miireg"} 3
node_network_iface_id{device="mld-wifi0"} 17
node_network_iface_id{device="pppoe-wan"} 34
node_network_iface_id{device="sit0"} 7
node_network_iface_id{device="soc0"} 19
node_network_iface_id{device="soc1"} 21
node_network_iface_id{device="wifi0"} 18
node_network_iface_id{device="wifi1"} 20
node_network_iface_id{device="wl0"} 38
node_network_iface_id{device="wl1"} 33
node_network_iface_id{device="wl13"} 35
node_network_iface_id{device="wl4"} 37
node_network_iface_id{device="wl5"} 39
# HELP node_network_iface_link Network device property: iface_link
# TYPE node_network_iface_link gauge
node_network_iface_link{device="bhap_mld0"} 30
node_network_iface_link{device="bhsta_mld0"} 31
node_network_iface_link{device="bond0"} 2
node_network_iface_link{device="br-docker"} 22
node_network_iface_link{device="br-lan"} 23
node_network_iface_link{device="br-miot"} 36
node_network_iface_link{device="erspan0"} 0
node_network_iface_link{device="eth0"} 4
node_network_iface_link{device="eth0.1"} 4
node_network_iface_link{device="eth0.2"} 4
node_network_iface_link{device="eth1"} 5
node_network_iface_link{device="eth1.3"} 5
node_network_iface_link{device="eth1.4"} 5
node_network_iface_link{device="gre0"} 0
node_network_iface_link{device="gretap0"} 0
node_network_iface_link{device="hostap_mld0"} 29
node_network_iface_link{device="ip6gre0"} 0
node_network_iface_link{device="ip6tnl0"} 0
node_network_iface_link{device="lo"} 1
node_network_iface_link{device="miireg"} 3
node_network_iface_link{device="mld-wifi0"} 17
node_network_iface_link{device="pppoe-wan"} 34
node_network_iface_link{device="sit0"} 0
node_network_iface_link{device="soc0"} 19
node_network_iface_link{device="soc1"} 21
node_network_iface_link{device="wifi0"} 18
node_network_iface_link{device="wifi1"} 20
node_network_iface_link{device="wl0"} 38
node_network_iface_link{device="wl1"} 33
node_network_iface_link{device="wl13"} 35
node_network_iface_link{device="wl4"} 37
node_network_iface_link{device="wl5"} 39
# HELP node_network_iface_link_mode Network device property: iface_link_mode
# TYPE node_network_iface_link_mode gauge
node_network_iface_link_mode{device="bhap_mld0"} 0
node_network_iface_link_mode{device="bhsta_mld0"} 0
node_network_iface_link_mode{device="bond0"} 0
node_network_iface_link_mode{device="br-docker"} 0
node_network_iface_link_mode{device="br-lan"} 0
node_network_iface_link_mode{device="br-miot"} 0
node_network_iface_link_mode{device="erspan0"} 0
node_network_iface_link_mode{device="eth0"} 0
node_network_iface_link_mode{device="eth0.1"} 0
node_network_iface_link_mode{device="eth0.2"} 0
node_network_iface_link_mode{device="eth1"} 0
node_network_iface_link_mode{device="eth1.3"} 0
node_network_iface_link_mode{device="eth1.4"} 0
node_network_iface_link_mode{device="gre0"} 0
node_network_iface_link_mode{device="gretap0"} 0
node_network_iface_link_mode{device="hostap_mld0"} 0
node_network_iface_link_mode{device="ip6gre0"} 0
node_network_iface_link_mode{device="ip6tnl0"} 0
node_network_iface_link_mode{device="lo"} 0
node_network_iface_link_mode{device="miireg"} 0
node_network_iface_link_mode{device="mld-wifi0"} 0
node_network_iface_link_mode{device="pppoe-wan"} 0
node_network_iface_link_mode{device="sit0"} 0
node_network_iface_link_mode{device="soc0"} 0
node_network_iface_link_mode{device="soc1"} 0
node_network_iface_link_mode{device="wifi0"} 0
node_network_iface_link_mode{device="wifi1"} 0
node_network_iface_link_mode{device="wl0"} 0
node_network_iface_link_mode{device="wl1"} 0
node_network_iface_link_mode{device="wl13"} 0
node_network_iface_link_mode{device="wl4"} 0
node_network_iface_link_mode{device="wl5"} 0
# HELP node_network_info Non-numeric data from /sys/class/net/<iface>, value is always 1.
# TYPE node_network_info gauge
node_network_info{address="",adminstate="down",broadcast="",device="miireg",duplex="",ifalias="",operstate="down"} 1
node_network_info{address="",adminstate="down",broadcast="",device="soc0",duplex="",ifalias="",operstate="down"} 1
node_network_info{address="",adminstate="down",broadcast="",device="soc1",duplex="",ifalias="",operstate="down"} 1
node_network_info{address="",adminstate="up",broadcast="",device="pppoe-wan",duplex="",ifalias="",operstate="unknown"} 1
node_network_info{address="00:00:00:00",adminstate="down",broadcast="00:00:00:00",device="gre0",duplex="",ifalias="",operstate="down"} 1
node_network_info{address="00:00:00:00",adminstate="down",broadcast="00:00:00:00",device="sit0",duplex="",ifalias="",operstate="down"} 1
node_network_info{address="00:00:00:00:00:00",adminstate="down",broadcast="ff:ff:ff:ff:ff:ff",device="erspan0",duplex="",ifalias="",operstate="down"} 1
node_network_info{address="00:00:00:00:00:00",adminstate="down",broadcast="ff:ff:ff:ff:ff:ff",device="gretap0",duplex="",ifalias="",operstate="down"} 1
node_network_info{address="00:00:00:00:00:00",adminstate="down",broadcast="ff:ff:ff:ff:ff:ff",device="mld-wifi0",duplex="",ifalias="",operstate="down"} 1
node_network_info{address="00:00:00:00:00:00",adminstate="up",broadcast="00:00:00:00:00:00",device="lo",duplex="",ifalias="",operstate="unknown"} 1
node_network_info{address="00:00:00:00:00:00",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="br-docker",duplex="",ifalias="",operstate="down"} 1
node_network_info{address="00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00",adminstate="down",broadcast="00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00",device="ip6gre0",duplex="",ifalias="",operstate="down"} 1
node_network_info{address="00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00",adminstate="down",broadcast="00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00",device="ip6tnl0",duplex="",ifalias="",operstate="down"} 1
node_network_info{address="16:5c:7f:94:84:08",adminstate="down",broadcast="ff:ff:ff:ff:ff:ff",device="bond0",duplex="",ifalias="",operstate="down"} 1
node_network_info{address="a4:a9:30:22:09:e7",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="eth0",duplex="",ifalias="",operstate="unknown"} 1
node_network_info{address="a4:a9:30:22:09:e7",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="eth0.1",duplex="",ifalias="",operstate="up"} 1
node_network_info{address="a4:a9:30:22:09:e7",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="eth0.2",duplex="",ifalias="",operstate="up"} 1
node_network_info{address="a4:a9:30:22:09:e7",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="eth1.4",duplex="",ifalias="",operstate="up"} 1
node_network_info{address="a4:a9:30:89:6e:33",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="br-lan",duplex="",ifalias="",operstate="up"} 1
node_network_info{address="a4:a9:30:89:6e:33",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="eth1",duplex="",ifalias="",operstate="unknown"} 1
node_network_info{address="a4:a9:30:89:6e:33",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="eth1.3",duplex="",ifalias="",operstate="up"} 1
node_network_info{address="a4:a9:30:89:6e:35",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="wifi0",duplex="",ifalias="",operstate="unknown"} 1
node_network_info{address="a4:a9:30:89:6e:35",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="wl1",duplex="",ifalias="",operstate="up"} 1
node_network_info{address="a4:a9:30:89:6e:36",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="wifi1",duplex="",ifalias="",operstate="unknown"} 1
node_network_info{address="a4:a9:30:89:6e:36",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="wl0",duplex="",ifalias="",operstate="up"} 1
node_network_info{address="aa:a9:30:89:6e:35",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="br-miot",duplex="",ifalias="",operstate="up"} 1
node_network_info{address="aa:a9:30:89:6e:35",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="wl13",duplex="",ifalias="",operstate="up"} 1
node_network_info{address="ae:a9:30:89:6e:35",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="wl4",duplex="",ifalias="",operstate="up"} 1
node_network_info{address="ae:a9:30:89:6e:36",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="wl5",duplex="",ifalias="",operstate="up"} 1
node_network_info{address="b6:a9:30:89:6e:33",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="hostap_mld0",duplex="unknown",ifalias="",operstate="down"} 1
node_network_info{address="c6:a9:30:89:6e:33",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="bhap_mld0",duplex="unknown",ifalias="",operstate="up"} 1
node_network_info{address="d6:a9:30:89:6e:33",adminstate="up",broadcast="ff:ff:ff:ff:ff:ff",device="bhsta_mld0",duplex="unknown",ifalias="",operstate="down"} 1
# HELP node_network_mtu_bytes Network device property: mtu_bytes
# TYPE node_network_mtu_bytes gauge
node_network_mtu_bytes{device="bhap_mld0"} 1500
node_network_mtu_bytes{device="bhsta_mld0"} 1500
node_network_mtu_bytes{device="bond0"} 1500
node_network_mtu_bytes{device="br-docker"} 1500
node_network_mtu_bytes{device="br-lan"} 1500
node_network_mtu_bytes{device="br-miot"} 1500
node_network_mtu_bytes{device="erspan0"} 1450
node_network_mtu_bytes{device="eth0"} 1500
node_network_mtu_bytes{device="eth0.1"} 1500
node_network_mtu_bytes{device="eth0.2"} 1500
node_network_mtu_bytes{device="eth1"} 1500
node_network_mtu_bytes{device="eth1.3"} 1500
node_network_mtu_bytes{device="eth1.4"} 1500
node_network_mtu_bytes{device="gre0"} 1476
node_network_mtu_bytes{device="gretap0"} 1462
node_network_mtu_bytes{device="hostap_mld0"} 1500
node_network_mtu_bytes{device="ip6gre0"} 1448
node_network_mtu_bytes{device="ip6tnl0"} 1452
node_network_mtu_bytes{device="lo"} 65536
node_network_mtu_bytes{device="miireg"} 0
node_network_mtu_bytes{device="mld-wifi0"} 1500
node_network_mtu_bytes{device="pppoe-wan"} 1480
node_network_mtu_bytes{device="sit0"} 1480
node_network_mtu_bytes{device="soc0"} 0
node_network_mtu_bytes{device="soc1"} 0
node_network_mtu_bytes{device="wifi0"} 1500
node_network_mtu_bytes{device="wifi1"} 1500
node_network_mtu_bytes{device="wl0"} 1500
node_network_mtu_bytes{device="wl1"} 1500
node_network_mtu_bytes{device="wl13"} 1500
node_network_mtu_bytes{device="wl4"} 1500
node_network_mtu_bytes{device="wl5"} 1500
# HELP node_network_name_assign_type Network device property: name_assign_type
# TYPE node_network_name_assign_type gauge
node_network_name_assign_type{device="pppoe-wan"} 4
# HELP node_network_net_dev_group Network device property: net_dev_group
# TYPE node_network_net_dev_group gauge
node_network_net_dev_group{device="bhap_mld0"} 0
node_network_net_dev_group{device="bhsta_mld0"} 0
node_network_net_dev_group{device="bond0"} 0
node_network_net_dev_group{device="br-docker"} 0
node_network_net_dev_group{device="br-lan"} 0
node_network_net_dev_group{device="br-miot"} 0
node_network_net_dev_group{device="erspan0"} 0
node_network_net_dev_group{device="eth0"} 0
node_network_net_dev_group{device="eth0.1"} 0
node_network_net_dev_group{device="eth0.2"} 0
node_network_net_dev_group{device="eth1"} 0
node_network_net_dev_group{device="eth1.3"} 0
node_network_net_dev_group{device="eth1.4"} 0
node_network_net_dev_group{device="gre0"} 0
node_network_net_dev_group{device="gretap0"} 0
node_network_net_dev_group{device="hostap_mld0"} 0
node_network_net_dev_group{device="ip6gre0"} 0
node_network_net_dev_group{device="ip6tnl0"} 0
node_network_net_dev_group{device="lo"} 0
node_network_net_dev_group{device="miireg"} 0
node_network_net_dev_group{device="mld-wifi0"} 0
node_network_net_dev_group{device="pppoe-wan"} 0
node_network_net_dev_group{device="sit0"} 0
node_network_net_dev_group{device="soc0"} 0
node_network_net_dev_group{device="soc1"} 0
node_network_net_dev_group{device="wifi0"} 0
node_network_net_dev_group{device="wifi1"} 0
node_network_net_dev_group{device="wl0"} 0
node_network_net_dev_group{device="wl1"} 0
node_network_net_dev_group{device="wl13"} 0
node_network_net_dev_group{device="wl4"} 0
node_network_net_dev_group{device="wl5"} 0
# HELP node_network_protocol_type Network device property: protocol_type
# TYPE node_network_protocol_type gauge
node_network_protocol_type{device="bhap_mld0"} 1
node_network_protocol_type{device="bhsta_mld0"} 1
node_network_protocol_type{device="bond0"} 1
node_network_protocol_type{device="br-docker"} 1
node_network_protocol_type{device="br-lan"} 1
node_network_protocol_type{device="br-miot"} 1
node_network_protocol_type{device="erspan0"} 1
node_network_protocol_type{device="eth0"} 1
node_network_protocol_type{device="eth0.1"} 1
node_network_protocol_type{device="eth0.2"} 1
node_network_protocol_type{device="eth1"} 1
node_network_protocol_type{device="eth1.3"} 1
node_network_protocol_type{device="eth1.4"} 1
node_network_protocol_type{device="gre0"} 778
node_network_protocol_type{device="gretap0"} 1
node_network_protocol_type{device="hostap_mld0"} 1
node_network_protocol_type{device="ip6gre0"} 823
node_network_protocol_type{device="ip6tnl0"} 769
node_network_protocol_type{device="lo"} 772
node_network_protocol_type{device="miireg"} 0
node_network_protocol_type{device="mld-wifi0"} 1
node_network_protocol_type{device="pppoe-wan"} 512
node_network_protocol_type{device="sit0"} 776
node_network_protocol_type{device="soc0"} 801
node_network_protocol_type{device="soc1"} 801
node_network_protocol_type{device="wifi0"} 801
node_network_protocol_type{device="wifi1"} 801
node_network_protocol_type{device="wl0"} 1
node_network_protocol_type{device="wl1"} 1
node_network_protocol_type{device="wl13"} 1
node_network_protocol_type{device="wl4"} 1
node_network_protocol_type{device="wl5"} 1
# HELP node_network_receive_bytes_total Network device statistic receive_bytes.
# TYPE node_network_receive_bytes_total counter
node_network_receive_bytes_total{device="bhap_mld0"} 0
node_network_receive_bytes_total{device="bhsta_mld0"} 0
node_network_receive_bytes_total{device="bond0"} 0
node_network_receive_bytes_total{device="br-docker"} 6290
node_network_receive_bytes_total{device="br-lan"} 4.83771589e+09
node_network_receive_bytes_total{device="br-miot"} 0
node_network_receive_bytes_total{device="erspan0"} 0
node_network_receive_bytes_total{device="eth0"} 1.3214630856e+10
node_network_receive_bytes_total{device="eth0.1"} 1.3081818643e+10
node_network_receive_bytes_total{device="eth0.2"} 7.0303653e+07
node_network_receive_bytes_total{device="eth1"} 4.6162681512e+10
node_network_receive_bytes_total{device="eth1.3"} 2.673275848e+09
node_network_receive_bytes_total{device="eth1.4"} 4.29228088e+10
node_network_receive_bytes_total{device="gre0"} 0
node_network_receive_bytes_total{device="gretap0"} 0
node_network_receive_bytes_total{device="hostap_mld0"} 0
node_network_receive_bytes_total{device="ip6gre0"} 0
node_network_receive_bytes_total{device="ip6tnl0"} 0
node_network_receive_bytes_total{device="lo"} 7.5167593e+07
node_network_receive_bytes_total{device="miireg"} 0
node_network_receive_bytes_total{device="mld-wifi0"} 0
node_network_receive_bytes_total{device="pppoe-wan"} 4.2827307473e+10
node_network_receive_bytes_total{device="sit0"} 0
node_network_receive_bytes_total{device="soc0"} 0
node_network_receive_bytes_total{device="soc1"} 0
node_network_receive_bytes_total{device="wifi0"} 6.83907e+06
node_network_receive_bytes_total{device="wifi1"} 9.407179092e+09
node_network_receive_bytes_total{device="wl0"} 9.407747715e+09
node_network_receive_bytes_total{device="wl1"} 6.835705e+06
node_network_receive_bytes_total{device="wl13"} 0
node_network_receive_bytes_total{device="wl4"} 0
node_network_receive_bytes_total{device="wl5"} 0
# HELP node_network_receive_compressed_total Network device statistic receive_compressed.
# TYPE node_network_receive_compressed_total counter
node_network_receive_compressed_total{device="bhap_mld0"} 0
node_network_receive_compressed_total{device="bhsta_mld0"} 0
node_network_receive_compressed_total{device="bond0"} 0
node_network_receive_compressed_total{device="br-docker"} 0
node_network_receive_compressed_total{device="br-lan"} 0
node_network_receive_compressed_total{device="br-miot"} 0
node_network_receive_compressed_total{device="erspan0"} 0
node_network_receive_compressed_total{device="eth0"} 0
node_network_receive_compressed_total{device="eth0.1"} 0
node_network_receive_compressed_total{device="eth0.2"} 0
node_network_receive_compressed_total{device="eth1"} 0
node_network_receive_compressed_total{device="eth1.3"} 0
node_network_receive_compressed_total{device="eth1.4"} 0
node_network_receive_compressed_total{device="gre0"} 0
node_network_receive_compressed_total{device="gretap0"} 0
node_network_receive_compressed_total{device="hostap_mld0"} 0
node_network_receive_compressed_total{device="ip6gre0"} 0
node_network_receive_compressed_total{device="ip6tnl0"} 0
node_network_receive_compressed_total{device="lo"} 0
node_network_receive_compressed_total{device="miireg"} 0
node_network_receive_compressed_total{device="mld-wifi0"} 0
node_network_receive_compressed_total{device="pppoe-wan"} 0
node_network_receive_compressed_total{device="sit0"} 0
node_network_receive_compressed_total{device="soc0"} 0
node_network_receive_compressed_total{device="soc1"} 0
node_network_receive_compressed_total{device="wifi0"} 0
node_network_receive_compressed_total{device="wifi1"} 0
node_network_receive_compressed_total{device="wl0"} 0
node_network_receive_compressed_total{device="wl1"} 0
node_network_receive_compressed_total{device="wl13"} 0
node_network_receive_compressed_total{device="wl4"} 0
node_network_receive_compressed_total{device="wl5"} 0
# HELP node_network_receive_drop_total Network device statistic receive_drop.
# TYPE node_network_receive_drop_total counter
node_network_receive_drop_total{device="bhap_mld0"} 0
node_network_receive_drop_total{device="bhsta_mld0"} 0
node_network_receive_drop_total{device="bond0"} 0
node_network_receive_drop_total{device="br-docker"} 0
node_network_receive_drop_total{device="br-lan"} 4260
node_network_receive_drop_total{device="br-miot"} 0
node_network_receive_drop_total{device="erspan0"} 0
node_network_receive_drop_total{device="eth0"} 1
node_network_receive_drop_total{device="eth0.1"} 18
node_network_receive_drop_total{device="eth0.2"} 0
node_network_receive_drop_total{device="eth1"} 2
node_network_receive_drop_total{device="eth1.3"} 0
node_network_receive_drop_total{device="eth1.4"} 187225
node_network_receive_drop_total{device="gre0"} 0
node_network_receive_drop_total{device="gretap0"} 0
node_network_receive_drop_total{device="hostap_mld0"} 0
node_network_receive_drop_total{device="ip6gre0"} 0
node_network_receive_drop_total{device="ip6tnl0"} 0
node_network_receive_drop_total{device="lo"} 0
node_network_receive_drop_total{device="miireg"} 0
node_network_receive_drop_total{device="mld-wifi0"} 0
node_network_receive_drop_total{device="pppoe-wan"} 24
node_network_receive_drop_total{device="sit0"} 0
node_network_receive_drop_total{device="soc0"} 0
node_network_receive_drop_total{device="soc1"} 0
node_network_receive_drop_total{device="wifi0"} 0
node_network_receive_drop_total{device="wifi1"} 1
node_network_receive_drop_total{device="wl0"} 1
node_network_receive_drop_total{device="wl1"} 0
node_network_receive_drop_total{device="wl13"} 0
node_network_receive_drop_total{device="wl4"} 0
node_network_receive_drop_total{device="wl5"} 0
# HELP node_network_receive_errs_total Network device statistic receive_errs.
# TYPE node_network_receive_errs_total counter
node_network_receive_errs_total{device="bhap_mld0"} 0
node_network_receive_errs_total{device="bhsta_mld0"} 0
node_network_receive_errs_total{device="bond0"} 0
node_network_receive_errs_total{device="br-docker"} 0
node_network_receive_errs_total{device="br-lan"} 0
node_network_receive_errs_total{device="br-miot"} 0
node_network_receive_errs_total{device="erspan0"} 0
node_network_receive_errs_total{device="eth0"} 0
node_network_receive_errs_total{device="eth0.1"} 0
node_network_receive_errs_total{device="eth0.2"} 0
node_network_receive_errs_total{device="eth1"} 0
node_network_receive_errs_total{device="eth1.3"} 0
node_network_receive_errs_total{device="eth1.4"} 0
node_network_receive_errs_total{device="gre0"} 0
node_network_receive_errs_total{device="gretap0"} 0
node_network_receive_errs_total{device="hostap_mld0"} 0
node_network_receive_errs_total{device="ip6gre0"} 0
node_network_receive_errs_total{device="ip6tnl0"} 0
node_network_receive_errs_total{device="lo"} 0
node_network_receive_errs_total{device="miireg"} 0
node_network_receive_errs_total{device="mld-wifi0"} 0
node_network_receive_errs_total{device="pppoe-wan"} 0
node_network_receive_errs_total{device="sit0"} 0
node_network_receive_errs_total{device="soc0"} 0
node_network_receive_errs_total{device="soc1"} 0
node_network_receive_errs_total{device="wifi0"} 34
node_network_receive_errs_total{device="wifi1"} 2061
node_network_receive_errs_total{device="wl0"} 2061
node_network_receive_errs_total{device="wl1"} 34
node_network_receive_errs_total{device="wl13"} 0
node_network_receive_errs_total{device="wl4"} 0
node_network_receive_errs_total{device="wl5"} 0
# HELP node_network_receive_fifo_total Network device statistic receive_fifo.
# TYPE node_network_receive_fifo_total counter
node_network_receive_fifo_total{device="bhap_mld0"} 0
node_network_receive_fifo_total{device="bhsta_mld0"} 0
node_network_receive_fifo_total{device="bond0"} 0
node_network_receive_fifo_total{device="br-docker"} 0
node_network_receive_fifo_total{device="br-lan"} 0
node_network_receive_fifo_total{device="br-miot"} 0
node_network_receive_fifo_total{device="erspan0"} 0
node_network_receive_fifo_total{device="eth0"} 0
node_network_receive_fifo_total{device="eth0.1"} 0
node_network_receive_fifo_total{device="eth0.2"} 0
node_network_receive_fifo_total{device="eth1"} 0
node_network_receive_fifo_total{device="eth1.3"} 0
node_network_receive_fifo_total{device="eth1.4"} 0
node_network_receive_fifo_total{device="gre0"} 0
node_network_receive_fifo_total{device="gretap0"} 0
node_network_receive_fifo_total{device="hostap_mld0"} 0
node_network_receive_fifo_total{device="ip6gre0"} 0
node_network_receive_fifo_total{device="ip6tnl0"} 0
node_network_receive_fifo_total{device="lo"} 0
node_network_receive_fifo_total{device="miireg"} 0
node_network_receive_fifo_total{device="mld-wifi0"} 0
node_network_receive_fifo_total{device="pppoe-wan"} 0
node_network_receive_fifo_total{device="sit0"} 0
node_network_receive_fifo_total{device="soc0"} 0
node_network_receive_fifo_total{device="soc1"} 0
node_network_receive_fifo_total{device="wifi0"} 0
node_network_receive_fifo_total{device="wifi1"} 0
node_network_receive_fifo_total{device="wl0"} 0
node_network_receive_fifo_total{device="wl1"} 0
node_network_receive_fifo_total{device="wl13"} 0
node_network_receive_fifo_total{device="wl4"} 0
node_network_receive_fifo_total{device="wl5"} 0
# HELP node_network_receive_frame_total Network device statistic receive_frame.
# TYPE node_network_receive_frame_total counter
node_network_receive_frame_total{device="bhap_mld0"} 0
node_network_receive_frame_total{device="bhsta_mld0"} 0
node_network_receive_frame_total{device="bond0"} 0
node_network_receive_frame_total{device="br-docker"} 0
node_network_receive_frame_total{device="br-lan"} 0
node_network_receive_frame_total{device="br-miot"} 0
node_network_receive_frame_total{device="erspan0"} 0
node_network_receive_frame_total{device="eth0"} 0
node_network_receive_frame_total{device="eth0.1"} 0
node_network_receive_frame_total{device="eth0.2"} 0
node_network_receive_frame_total{device="eth1"} 0
node_network_receive_frame_total{device="eth1.3"} 0
node_network_receive_frame_total{device="eth1.4"} 0
node_network_receive_frame_total{device="gre0"} 0
node_network_receive_frame_total{device="gretap0"} 0
node_network_receive_frame_total{device="hostap_mld0"} 0
node_network_receive_frame_total{device="ip6gre0"} 0
node_network_receive_frame_total{device="ip6tnl0"} 0
node_network_receive_frame_total{device="lo"} 0
node_network_receive_frame_total{device="miireg"} 0
node_network_receive_frame_total{device="mld-wifi0"} 0
node_network_receive_frame_total{device="pppoe-wan"} 0
node_network_receive_frame_total{device="sit0"} 0
node_network_receive_frame_total{device="soc0"} 0
node_network_receive_frame_total{device="soc1"} 0
node_network_receive_frame_total{device="wifi0"} 0
node_network_receive_frame_total{device="wifi1"} 0
node_network_receive_frame_total{device="wl0"} 0
node_network_receive_frame_total{device="wl1"} 0
node_network_receive_frame_total{device="wl13"} 0
node_network_receive_frame_total{device="wl4"} 0
node_network_receive_frame_total{device="wl5"} 0
# HELP node_network_receive_multicast_total Network device statistic receive_multicast.
# TYPE node_network_receive_multicast_total counter
node_network_receive_multicast_total{device="bhap_mld0"} 0
node_network_receive_multicast_total{device="bhsta_mld0"} 0
node_network_receive_multicast_total{device="bond0"} 0
node_network_receive_multicast_total{device="br-docker"} 0
node_network_receive_multicast_total{device="br-lan"} 692308
node_network_receive_multicast_total{device="br-miot"} 0
node_network_receive_multicast_total{device="erspan0"} 0
node_network_receive_multicast_total{device="eth0"} 22970
node_network_receive_multicast_total{device="eth0.1"} 722
node_network_receive_multicast_total{device="eth0.2"} 4223
node_network_receive_multicast_total{device="eth1"} 2.195734e+06
node_network_receive_multicast_total{device="eth1.3"} 768
node_network_receive_multicast_total{device="eth1.4"} 6
node_network_receive_multicast_total{device="gre0"} 0
node_network_receive_multicast_total{device="gretap0"} 0
node_network_receive_multicast_total{device="hostap_mld0"} 0
node_network_receive_multicast_total{device="ip6gre0"} 0
node_network_receive_multicast_total{device="ip6tnl0"} 0
node_network_receive_multicast_total{device="lo"} 0
node_network_receive_multicast_total{device="miireg"} 0
node_network_receive_multicast_total{device="mld-wifi0"} 0
node_network_receive_multicast_total{device="pppoe-wan"} 0
node_network_receive_multicast_total{device="sit0"} 0
node_network_receive_multicast_total{device="soc0"} 0
node_network_receive_multicast_total{device="soc1"} 0
node_network_receive_multicast_total{device="wifi0"} 0
node_network_receive_multicast_total{device="wifi1"} 0
node_network_receive_multicast_total{device="wl0"} 0
node_network_receive_multicast_total{device="wl1"} 0
node_network_receive_multicast_total{device="wl13"} 0
node_network_receive_multicast_total{device="wl4"} 0
node_network_receive_multicast_total{device="wl5"} 0
# HELP node_network_receive_nohandler_total Network device statistic receive_nohandler.
# TYPE node_network_receive_nohandler_total counter
node_network_receive_nohandler_total{device="bhap_mld0"} 0
node_network_receive_nohandler_total{device="bhsta_mld0"} 0
node_network_receive_nohandler_total{device="bond0"} 0
node_network_receive_nohandler_total{device="br-docker"} 0
node_network_receive_nohandler_total{device="br-lan"} 0
node_network_receive_nohandler_total{device="br-miot"} 0
node_network_receive_nohandler_total{device="erspan0"} 0
node_network_receive_nohandler_total{device="eth0"} 0
node_network_receive_nohandler_total{device="eth0.1"} 0
node_network_receive_nohandler_total{device="eth0.2"} 0
node_network_receive_nohandler_total{device="eth1"} 0
node_network_receive_nohandler_total{device="eth1.3"} 0
node_network_receive_nohandler_total{device="eth1.4"} 0
node_network_receive_nohandler_total{device="gre0"} 0
node_network_receive_nohandler_total{device="gretap0"} 0
node_network_receive_nohandler_total{device="hostap_mld0"} 0
node_network_receive_nohandler_total{device="ip6gre0"} 0
node_network_receive_nohandler_total{device="ip6tnl0"} 0
node_network_receive_nohandler_total{device="lo"} 0
node_network_receive_nohandler_total{device="miireg"} 0
node_network_receive_nohandler_total{device="mld-wifi0"} 0
node_network_receive_nohandler_total{device="pppoe-wan"} 0
node_network_receive_nohandler_total{device="sit0"} 0
node_network_receive_nohandler_total{device="soc0"} 0
node_network_receive_nohandler_total{device="soc1"} 0
node_network_receive_nohandler_total{device="wifi0"} 0
node_network_receive_nohandler_total{device="wifi1"} 0
node_network_receive_nohandler_total{device="wl0"} 0
node_network_receive_nohandler_total{device="wl1"} 0
node_network_receive_nohandler_total{device="wl13"} 0
node_network_receive_nohandler_total{device="wl4"} 0
node_network_receive_nohandler_total{device="wl5"} 0
# HELP node_network_receive_packets_total Network device statistic receive_packets.
# TYPE node_network_receive_packets_total counter
node_network_receive_packets_total{device="bhap_mld0"} 0
node_network_receive_packets_total{device="bhsta_mld0"} 0
node_network_receive_packets_total{device="bond0"} 0
node_network_receive_packets_total{device="br-docker"} 86
node_network_receive_packets_total{device="br-lan"} 2.4920097e+07
node_network_receive_packets_total{device="br-miot"} 0
node_network_receive_packets_total{device="erspan0"} 0
node_network_receive_packets_total{device="eth0"} 1.0045626e+07
node_network_receive_packets_total{device="eth0.1"} 9.031191e+06
node_network_receive_packets_total{device="eth0.2"} 974939
node_network_receive_packets_total{device="eth1"} 6.1999392e+07
node_network_receive_packets_total{device="eth1.3"} 2.054797e+07
node_network_receive_packets_total{device="eth1.4"} 3.9240017e+07
node_network_receive_packets_total{device="gre0"} 0
node_network_receive_packets_total{device="gretap0"} 0
node_network_receive_packets_total{device="hostap_mld0"} 0
node_network_receive_packets_total{device="ip6gre0"} 0
node_network_receive_packets_total{device="ip6tnl0"} 0
node_network_receive_packets_total{device="lo"} 446145
node_network_receive_packets_total{device="miireg"} 0
node_network_receive_packets_total{device="mld-wifi0"} 0
node_network_receive_packets_total{device="pppoe-wan"} 3.9051708e+07
node_network_receive_packets_total{device="sit0"} 0
node_network_receive_packets_total{device="soc0"} 0
node_network_receive_packets_total{device="soc1"} 0
node_network_receive_packets_total{device="wifi0"} 56053
node_network_receive_packets_total{device="wifi1"} 1.1095031e+07
node_network_receive_packets_total{device="wl0"} 1.108713e+07
node_network_receive_packets_total{device="wl1"} 56023
node_network_receive_packets_total{device="wl13"} 0
node_network_receive_packets_total{device="wl4"} 0
node_network_receive_packets_total{device="wl5"} 0
# HELP node_network_speed_bytes Network device property: speed_bytes
# TYPE node_network_speed_bytes gauge
node_network_speed_bytes{device="bhap_mld0"} -125000
node_network_speed_bytes{device="bhsta_mld0"} -125000
node_network_speed_bytes{device="hostap_mld0"} -125000
# HELP node_network_transmit_bytes_total Network device statistic transmit_bytes.
# TYPE node_network_transmit_bytes_total counter
node_network_transmit_bytes_total{device="bhap_mld0"} 0
node_network_transmit_bytes_total{device="bhsta_mld0"} 0
node_network_transmit_bytes_total{device="bond0"} 0
node_network_transmit_bytes_total{device="br-docker"} 296094
node_network_transmit_bytes_total{device="br-lan"} 4.2663054027e+10
node_network_transmit_bytes_total{device="br-miot"} 746
node_network_transmit_bytes_total{device="erspan0"} 0
node_network_transmit_bytes_total{device="eth0"} 6.217639293e+09
node_network_transmit_bytes_total{device="eth0.1"} 9.27925162e+08
node_network_transmit_bytes_total{device="eth0.2"} 4.977184169e+09
node_network_transmit_bytes_total{device="eth1"} 5.4757245569e+10
node_network_transmit_bytes_total{device="eth1.3"} 4.9766079759e+10
node_network_transmit_bytes_total{device="eth1.4"} 4.629368604e+09
node_network_transmit_bytes_total{device="gre0"} 0
node_network_transmit_bytes_total{device="gretap0"} 0
node_network_transmit_bytes_total{device="hostap_mld0"} 0
node_network_transmit_bytes_total{device="ip6gre0"} 0
node_network_transmit_bytes_total{device="ip6tnl0"} 0
node_network_transmit_bytes_total{device="lo"} 7.5167593e+07
node_network_transmit_bytes_total{device="miireg"} 0
node_network_transmit_bytes_total{device="mld-wifi0"} 0
node_network_transmit_bytes_total{device="pppoe-wan"} 4.553540604e+09
node_network_transmit_bytes_total{device="sit0"} 0
node_network_transmit_bytes_total{device="soc0"} 0
node_network_transmit_bytes_total{device="soc1"} 0
node_network_transmit_bytes_total{device="wifi0"} 3.63817647e+08
node_network_transmit_bytes_total{device="wifi1"} 8.85175786e+09
node_network_transmit_bytes_total{device="wl0"} 8.85175786e+09
node_network_transmit_bytes_total{device="wl1"} 3.63817647e+08
node_network_transmit_bytes_total{device="wl13"} 0
node_network_transmit_bytes_total{device="wl4"} 0
node_network_transmit_bytes_total{device="wl5"} 0
# HELP node_network_transmit_carrier_total Network device statistic transmit_carrier.
# TYPE node_network_transmit_carrier_total counter
node_network_transmit_carrier_total{device="bhap_mld0"} 0
node_network_transmit_carrier_total{device="bhsta_mld0"} 0
node_network_transmit_carrier_total{device="bond0"} 0
node_network_transmit_carrier_total{device="br-docker"} 0
node_network_transmit_carrier_total{device="br-lan"} 0
node_network_transmit_carrier_total{device="br-miot"} 0
node_network_transmit_carrier_total{device="erspan0"} 0
node_network_transmit_carrier_total{device="eth0"} 0
node_network_transmit_carrier_total{device="eth0.1"} 0
node_network_transmit_carrier_total{device="eth0.2"} 0
node_network_transmit_carrier_total{device="eth1"} 0
node_network_transmit_carrier_total{device="eth1.3"} 0
node_network_transmit_carrier_total{device="eth1.4"} 0
node_network_transmit_carrier_total{device="gre0"} 0
node_network_transmit_carrier_total{device="gretap0"} 0
node_network_transmit_carrier_total{device="hostap_mld0"} 0
node_network_transmit_carrier_total{device="ip6gre0"} 0
node_network_transmit_carrier_total{device="ip6tnl0"} 0
node_network_transmit_carrier_total{device="lo"} 0
node_network_transmit_carrier_total{device="miireg"} 0
node_network_transmit_carrier_total{device="mld-wifi0"} 0
node_network_transmit_carrier_total{device="pppoe-wan"} 0
node_network_transmit_carrier_total{device="sit0"} 0
node_network_transmit_carrier_total{device="soc0"} 0
node_network_transmit_carrier_total{device="soc1"} 0
node_network_transmit_carrier_total{device="wifi0"} 0
node_network_transmit_carrier_total{device="wifi1"} 0
node_network_transmit_carrier_total{device="wl0"} 0
node_network_transmit_carrier_total{device="wl1"} 0
node_network_transmit_carrier_total{device="wl13"} 0
node_network_transmit_carrier_total{device="wl4"} 0
node_network_transmit_carrier_total{device="wl5"} 0
# HELP node_network_transmit_colls_total Network device statistic transmit_colls.
# TYPE node_network_transmit_colls_total counter
node_network_transmit_colls_total{device="bhap_mld0"} 0
node_network_transmit_colls_total{device="bhsta_mld0"} 0
node_network_transmit_colls_total{device="bond0"} 0
node_network_transmit_colls_total{device="br-docker"} 0
node_network_transmit_colls_total{device="br-lan"} 0
node_network_transmit_colls_total{device="br-miot"} 0
node_network_transmit_colls_total{device="erspan0"} 0
node_network_transmit_colls_total{device="eth0"} 0
node_network_transmit_colls_total{device="eth0.1"} 0
node_network_transmit_colls_total{device="eth0.2"} 0
node_network_transmit_colls_total{device="eth1"} 0
node_network_transmit_colls_total{device="eth1.3"} 0
node_network_transmit_colls_total{device="eth1.4"} 0
node_network_transmit_colls_total{device="gre0"} 0
node_network_transmit_colls_total{device="gretap0"} 0
node_network_transmit_colls_total{device="hostap_mld0"} 0
node_network_transmit_colls_total{device="ip6gre0"} 0
node_network_transmit_colls_total{device="ip6tnl0"} 0
node_network_transmit_colls_total{device="lo"} 0
node_network_transmit_colls_total{device="miireg"} 0
node_network_transmit_colls_total{device="mld-wifi0"} 0
node_network_transmit_colls_total{device="pppoe-wan"} 0
node_network_transmit_colls_total{device="sit0"} 0
node_network_transmit_colls_total{device="soc0"} 0
node_network_transmit_colls_total{device="soc1"} 0
node_network_transmit_colls_total{device="wifi0"} 0
node_network_transmit_colls_total{device="wifi1"} 0
node_network_transmit_colls_total{device="wl0"} 0
node_network_transmit_colls_total{device="wl1"} 0
node_network_transmit_colls_total{device="wl13"} 0
node_network_transmit_colls_total{device="wl4"} 0
node_network_transmit_colls_total{device="wl5"} 0
# HELP node_network_transmit_compressed_total Network device statistic transmit_compressed.
# TYPE node_network_transmit_compressed_total counter
node_network_transmit_compressed_total{device="bhap_mld0"} 0
node_network_transmit_compressed_total{device="bhsta_mld0"} 0
node_network_transmit_compressed_total{device="bond0"} 0
node_network_transmit_compressed_total{device="br-docker"} 0
node_network_transmit_compressed_total{device="br-lan"} 0
node_network_transmit_compressed_total{device="br-miot"} 0
node_network_transmit_compressed_total{device="erspan0"} 0
node_network_transmit_compressed_total{device="eth0"} 0
node_network_transmit_compressed_total{device="eth0.1"} 0
node_network_transmit_compressed_total{device="eth0.2"} 0
node_network_transmit_compressed_total{device="eth1"} 0
node_network_transmit_compressed_total{device="eth1.3"} 0
node_network_transmit_compressed_total{device="eth1.4"} 0
node_network_transmit_compressed_total{device="gre0"} 0
node_network_transmit_compressed_total{device="gretap0"} 0
node_network_transmit_compressed_total{device="hostap_mld0"} 0
node_network_transmit_compressed_total{device="ip6gre0"} 0
node_network_transmit_compressed_total{device="ip6tnl0"} 0
node_network_transmit_compressed_total{device="lo"} 0
node_network_transmit_compressed_total{device="miireg"} 0
node_network_transmit_compressed_total{device="mld-wifi0"} 0
node_network_transmit_compressed_total{device="pppoe-wan"} 0
node_network_transmit_compressed_total{device="sit0"} 0
node_network_transmit_compressed_total{device="soc0"} 0
node_network_transmit_compressed_total{device="soc1"} 0
node_network_transmit_compressed_total{device="wifi0"} 0
node_network_transmit_compressed_total{device="wifi1"} 0
node_network_transmit_compressed_total{device="wl0"} 0
node_network_transmit_compressed_total{device="wl1"} 0
node_network_transmit_compressed_total{device="wl13"} 0
node_network_transmit_compressed_total{device="wl4"} 0
node_network_transmit_compressed_total{device="wl5"} 0
# HELP node_network_transmit_drop_total Network device statistic transmit_drop.
# TYPE node_network_transmit_drop_total counter
node_network_transmit_drop_total{device="bhap_mld0"} 0
node_network_transmit_drop_total{device="bhsta_mld0"} 0
node_network_transmit_drop_total{device="bond0"} 0
node_network_transmit_drop_total{device="br-docker"} 0
node_network_transmit_drop_total{device="br-lan"} 0
node_network_transmit_drop_total{device="br-miot"} 0
node_network_transmit_drop_total{device="erspan0"} 0
node_network_transmit_drop_total{device="eth0"} 0
node_network_transmit_drop_total{device="eth0.1"} 0
node_network_transmit_drop_total{device="eth0.2"} 0
node_network_transmit_drop_total{device="eth1"} 0
node_network_transmit_drop_total{device="eth1.3"} 0
node_network_transmit_drop_total{device="eth1.4"} 0
node_network_transmit_drop_total{device="gre0"} 0
node_network_transmit_drop_total{device="gretap0"} 0
node_network_transmit_drop_total{device="hostap_mld0"} 0
node_network_transmit_drop_total{device="ip6gre0"} 0
node_network_transmit_drop_total{device="ip6tnl0"} 0
node_network_transmit_drop_total{device="lo"} 0
node_network_transmit_drop_total{device="miireg"} 0
node_network_transmit_drop_total{device="mld-wifi0"} 0
node_network_transmit_drop_total{device="pppoe-wan"} 0
node_network_transmit_drop_total{device="sit0"} 0
node_network_transmit_drop_total{device="soc0"} 0
node_network_transmit_drop_total{device="soc1"} 0
node_network_transmit_drop_total{device="wifi0"} 0
node_network_transmit_drop_total{device="wifi1"} 0
node_network_transmit_drop_total{device="wl0"} 0
node_network_transmit_drop_total{device="wl1"} 0
node_network_transmit_drop_total{device="wl13"} 0
node_network_transmit_drop_total{device="wl4"} 0
node_network_transmit_drop_total{device="wl5"} 0
# HELP node_network_transmit_errs_total Network device statistic transmit_errs.
# TYPE node_network_transmit_errs_total counter
node_network_transmit_errs_total{device="bhap_mld0"} 0
node_network_transmit_errs_total{device="bhsta_mld0"} 0
node_network_transmit_errs_total{device="bond0"} 0
node_network_transmit_errs_total{device="br-docker"} 0
node_network_transmit_errs_total{device="br-lan"} 0
node_network_transmit_errs_total{device="br-miot"} 0
node_network_transmit_errs_total{device="erspan0"} 0
node_network_transmit_errs_total{device="eth0"} 0
node_network_transmit_errs_total{device="eth0.1"} 0
node_network_transmit_errs_total{device="eth0.2"} 0
node_network_transmit_errs_total{device="eth1"} 0
node_network_transmit_errs_total{device="eth1.3"} 0
node_network_transmit_errs_total{device="eth1.4"} 0
node_network_transmit_errs_total{device="gre0"} 0
node_network_transmit_errs_total{device="gretap0"} 0
node_network_transmit_errs_total{device="hostap_mld0"} 0
node_network_transmit_errs_total{device="ip6gre0"} 0
node_network_transmit_errs_total{device="ip6tnl0"} 0
node_network_transmit_errs_total{device="lo"} 0
node_network_transmit_errs_total{device="miireg"} 0
node_network_transmit_errs_total{device="mld-wifi0"} 0
node_network_transmit_errs_total{device="pppoe-wan"} 0
node_network_transmit_errs_total{device="sit0"} 0
node_network_transmit_errs_total{device="soc0"} 0
node_network_transmit_errs_total{device="soc1"} 0
node_network_transmit_errs_total{device="wifi0"} 19
node_network_transmit_errs_total{device="wifi1"} 160
node_network_transmit_errs_total{device="wl0"} 160
node_network_transmit_errs_total{device="wl1"} 19
node_network_transmit_errs_total{device="wl13"} 0
node_network_transmit_errs_total{device="wl4"} 0
node_network_transmit_errs_total{device="wl5"} 0
# HELP node_network_transmit_fifo_total Network device statistic transmit_fifo.
# TYPE node_network_transmit_fifo_total counter
node_network_transmit_fifo_total{device="bhap_mld0"} 0
node_network_transmit_fifo_total{device="bhsta_mld0"} 0
node_network_transmit_fifo_total{device="bond0"} 0
node_network_transmit_fifo_total{device="br-docker"} 0
node_network_transmit_fifo_total{device="br-lan"} 0
node_network_transmit_fifo_total{device="br-miot"} 0
node_network_transmit_fifo_total{device="erspan0"} 0
node_network_transmit_fifo_total{device="eth0"} 0
node_network_transmit_fifo_total{device="eth0.1"} 0
node_network_transmit_fifo_total{device="eth0.2"} 0
node_network_transmit_fifo_total{device="eth1"} 0
node_network_transmit_fifo_total{device="eth1.3"} 0
node_network_transmit_fifo_total{device="eth1.4"} 0
node_network_transmit_fifo_total{device="gre0"} 0
node_network_transmit_fifo_total{device="gretap0"} 0
node_network_transmit_fifo_total{device="hostap_mld0"} 0
node_network_transmit_fifo_total{device="ip6gre0"} 0
node_network_transmit_fifo_total{device="ip6tnl0"} 0
node_network_transmit_fifo_total{device="lo"} 0
node_network_transmit_fifo_total{device="miireg"} 0
node_network_transmit_fifo_total{device="mld-wifi0"} 0
node_network_transmit_fifo_total{device="pppoe-wan"} 0
node_network_transmit_fifo_total{device="sit0"} 0
node_network_transmit_fifo_total{device="soc0"} 0
node_network_transmit_fifo_total{device="soc1"} 0
node_network_transmit_fifo_total{device="wifi0"} 0
node_network_transmit_fifo_total{device="wifi1"} 0
node_network_transmit_fifo_total{device="wl0"} 0
node_network_transmit_fifo_total{device="wl1"} 0
node_network_transmit_fifo_total{device="wl13"} 0
node_network_transmit_fifo_total{device="wl4"} 0
node_network_transmit_fifo_total{device="wl5"} 0
# HELP node_network_transmit_packets_total Network device statistic transmit_packets.
# TYPE node_network_transmit_packets_total counter
node_network_transmit_packets_total{device="bhap_mld0"} 0
node_network_transmit_packets_total{device="bhsta_mld0"} 0
node_network_transmit_packets_total{device="bond0"} 0
node_network_transmit_packets_total{device="br-docker"} 97
node_network_transmit_packets_total{device="br-lan"} 3.3625069e+07
node_network_transmit_packets_total{device="br-miot"} 7
node_network_transmit_packets_total{device="erspan0"} 0
node_network_transmit_packets_total{device="eth0"} 7.740224e+06
node_network_transmit_packets_total{device="eth0.1"} 1.88068e+06
node_network_transmit_packets_total{device="eth0.2"} 1.208314e+06
node_network_transmit_packets_total{device="eth1"} 6.8693483e+07
node_network_transmit_packets_total{device="eth1.3"} 4.2955412e+07
node_network_transmit_packets_total{device="eth1.4"} 2.5271576e+07
node_network_transmit_packets_total{device="gre0"} 0
node_network_transmit_packets_total{device="gretap0"} 0
node_network_transmit_packets_total{device="hostap_mld0"} 0
node_network_transmit_packets_total{device="ip6gre0"} 0
node_network_transmit_packets_total{device="ip6tnl0"} 0
node_network_transmit_packets_total{device="lo"} 446145
node_network_transmit_packets_total{device="miireg"} 0
node_network_transmit_packets_total{device="mld-wifi0"} 0
node_network_transmit_packets_total{device="pppoe-wan"} 2.5270623e+07
node_network_transmit_packets_total{device="sit0"} 0
node_network_transmit_packets_total{device="soc0"} 0
node_network_transmit_packets_total{device="soc1"} 0
node_network_transmit_packets_total{device="wifi0"} 815382
node_network_transmit_packets_total{device="wifi1"} 9.317131e+06
node_network_transmit_packets_total{device="wl0"} 9.317131e+06
node_network_transmit_packets_total{device="wl1"} 815382
node_network_transmit_packets_total{device="wl13"} 0
node_network_transmit_packets_total{device="wl4"} 0
node_network_transmit_packets_total{device="wl5"} 0
# HELP node_network_transmit_queue_length Network device property: transmit_queue_length
# TYPE node_network_transmit_queue_length gauge
node_network_transmit_queue_length{device="bhap_mld0"} 1000
node_network_transmit_queue_length{device="bhsta_mld0"} 1000
node_network_transmit_queue_length{device="bond0"} 1000
node_network_transmit_queue_length{device="br-docker"} 1000
node_network_transmit_queue_length{device="br-lan"} 1000
node_network_transmit_queue_length{device="br-miot"} 1000
node_network_transmit_queue_length{device="erspan0"} 1000
node_network_transmit_queue_length{device="eth0"} 1000
node_network_transmit_queue_length{device="eth0.1"} 1000
node_network_transmit_queue_length{device="eth0.2"} 1000
node_network_transmit_queue_length{device="eth1"} 1000
node_network_transmit_queue_length{device="eth1.3"} 1000
node_network_transmit_queue_length{device="eth1.4"} 1000
node_network_transmit_queue_length{device="gre0"} 1000
node_network_transmit_queue_length{device="gretap0"} 1000
node_network_transmit_queue_length{device="hostap_mld0"} 1000
node_network_transmit_queue_length{device="ip6gre0"} 1000
node_network_transmit_queue_length{device="ip6tnl0"} 1000
node_network_transmit_queue_length{device="lo"} 1000
node_network_transmit_queue_length{device="miireg"} 1000
node_network_transmit_queue_length{device="mld-wifi0"} 1000
node_network_transmit_queue_length{device="pppoe-wan"} 3
node_network_transmit_queue_length{device="sit0"} 1000
node_network_transmit_queue_length{device="soc0"} 1000
node_network_transmit_queue_length{device="soc1"} 1000
node_network_transmit_queue_length{device="wifi0"} 2699
node_network_transmit_queue_length{device="wifi1"} 2699
node_network_transmit_queue_length{device="wl0"} 0
node_network_transmit_queue_length{device="wl1"} 0
node_network_transmit_queue_length{device="wl13"} 0
node_network_transmit_queue_length{device="wl4"} 0
node_network_transmit_queue_length{device="wl5"} 0
# HELP node_network_up Value is 1 if operstate is 'up', 0 otherwise.
# TYPE node_network_up gauge
node_network_up{device="bhap_mld0"} 1
node_network_up{device="bhsta_mld0"} 0
node_network_up{device="bond0"} 0
node_network_up{device="br-docker"} 0
node_network_up{device="br-lan"} 1
node_network_up{device="br-miot"} 1
node_network_up{device="erspan0"} 0
node_network_up{device="eth0"} 0
node_network_up{device="eth0.1"} 1
node_network_up{device="eth0.2"} 1
node_network_up{device="eth1"} 0
node_network_up{device="eth1.3"} 1
node_network_up{device="eth1.4"} 1
node_network_up{device="gre0"} 0
node_network_up{device="gretap0"} 0
node_network_up{device="hostap_mld0"} 0
node_network_up{device="ip6gre0"} 0
node_network_up{device="ip6tnl0"} 0
node_network_up{device="lo"} 0
node_network_up{device="miireg"} 0
node_network_up{device="mld-wifi0"} 0
node_network_up{device="pppoe-wan"} 0
node_network_up{device="sit0"} 0
node_network_up{device="soc0"} 0
node_network_up{device="soc1"} 0
node_network_up{device="wifi0"} 0
node_network_up{device="wifi1"} 0
node_network_up{device="wl0"} 1
node_network_up{device="wl1"} 1
node_network_up{device="wl13"} 1
node_network_up{device="wl4"} 1
node_network_up{device="wl5"} 1
# HELP node_nf_conntrack_entries Number of currently allocated flow entries for connection tracking.
# TYPE node_nf_conntrack_entries gauge
node_nf_conntrack_entries 1278
# HELP node_nf_conntrack_entries_limit Maximum size of connection tracking table.
# TYPE node_nf_conntrack_entries_limit gauge
node_nf_conntrack_entries_limit 16384
# HELP node_nf_conntrack_stat_drop Number of packets dropped due to conntrack failure.
# TYPE node_nf_conntrack_stat_drop gauge
node_nf_conntrack_stat_drop 0
# HELP node_nf_conntrack_stat_early_drop Number of dropped conntrack entries to make room for new ones, if maximum table size was reached.
# TYPE node_nf_conntrack_stat_early_drop gauge
node_nf_conntrack_stat_early_drop 0
# HELP node_nf_conntrack_stat_found Number of searched entries which were successful.
# TYPE node_nf_conntrack_stat_found gauge
node_nf_conntrack_stat_found 27427
# HELP node_nf_conntrack_stat_ignore Number of packets seen which are already connected to a conntrack entry.
# TYPE node_nf_conntrack_stat_ignore gauge
node_nf_conntrack_stat_ignore 457668
# HELP node_nf_conntrack_stat_insert Number of entries inserted into the list.
# TYPE node_nf_conntrack_stat_insert gauge
node_nf_conntrack_stat_insert 0
# HELP node_nf_conntrack_stat_insert_failed Number of entries for which list insertion was attempted but failed.
# TYPE node_nf_conntrack_stat_insert_failed gauge
node_nf_conntrack_stat_insert_failed 0
# HELP node_nf_conntrack_stat_invalid Number of packets seen which can not be tracked.
# TYPE node_nf_conntrack_stat_invalid gauge
node_nf_conntrack_stat_invalid 5421
# HELP node_nf_conntrack_stat_search_restart Number of conntrack table lookups which had to be restarted due to hashtable resizes.
# TYPE node_nf_conntrack_stat_search_restart gauge
node_nf_conntrack_stat_search_restart 73510
# HELP node_os_info A metric with a constant '1' value labeled by build_id, id, id_like, image_id, image_version, name, pretty_name, variant, variant_id, version, version_codename, version_id.
# TYPE node_os_info gauge
node_os_info{build_id="unknown",id="openwrt",id_like="lede openwrt",image_id="",image_version="",name="OpenWrt",pretty_name="OpenWrt 18.06-SNAPSHOT",variant="",variant_id="",version="18.06-SNAPSHOT",version_codename="",version_id="18.06-snapshot"} 1
# HELP node_os_version Metric containing the major.minor part of the OS version.
# TYPE node_os_version gauge
node_os_version{id="openwrt",id_like="lede openwrt",name="OpenWrt"} 18.06
# HELP node_procs_blocked Number of processes blocked waiting for I/O to complete.
# TYPE node_procs_blocked gauge
node_procs_blocked 0
# HELP node_procs_running Number of processes in runnable state.
# TYPE node_procs_running gauge
node_procs_running 4
# HELP node_scrape_collector_duration_seconds node_exporter: Duration of a collector scrape.
# TYPE node_scrape_collector_duration_seconds gauge
node_scrape_collector_duration_seconds{collector="arp"} 0.048449167
node_scrape_collector_duration_seconds{collector="bcache"} 6.5833e-05
node_scrape_collector_duration_seconds{collector="bonding"} 0.000644875
node_scrape_collector_duration_seconds{collector="btrfs"} 0.039554459
node_scrape_collector_duration_seconds{collector="conntrack"} 0.000453458
node_scrape_collector_duration_seconds{collector="cpu"} 0.078098583
node_scrape_collector_duration_seconds{collector="cpufreq"} 0.024830083
node_scrape_collector_duration_seconds{collector="diskstats"} 0.008204958
node_scrape_collector_duration_seconds{collector="dmi"} 1.167e-06
node_scrape_collector_duration_seconds{collector="edac"} 5.8333e-05
node_scrape_collector_duration_seconds{collector="entropy"} 0.000394583
node_scrape_collector_duration_seconds{collector="fibrechannel"} 6.2416e-05
node_scrape_collector_duration_seconds{collector="filefd"} 0.000132291
node_scrape_collector_duration_seconds{collector="filesystem"} 0.008130083
node_scrape_collector_duration_seconds{collector="hwmon"} 0.000152709
node_scrape_collector_duration_seconds{collector="infiniband"} 5.875e-05
node_scrape_collector_duration_seconds{collector="ipvs"} 6.3583e-05
node_scrape_collector_duration_seconds{collector="loadavg"} 0.000144959
node_scrape_collector_duration_seconds{collector="mdadm"} 0.000119834
node_scrape_collector_duration_seconds{collector="meminfo"} 0.000662625
node_scrape_collector_duration_seconds{collector="netclass"} 0.166083917
node_scrape_collector_duration_seconds{collector="netdev"} 0.062279041
node_scrape_collector_duration_seconds{collector="netstat"} 0.042727292
node_scrape_collector_duration_seconds{collector="nfs"} 8.4875e-05
node_scrape_collector_duration_seconds{collector="nfsd"} 5.5917e-05
node_scrape_collector_duration_seconds{collector="nvme"} 7.5667e-05
node_scrape_collector_duration_seconds{collector="os"} 0.000231041
node_scrape_collector_duration_seconds{collector="powersupplyclass"} 0.000123208
node_scrape_collector_duration_seconds{collector="pressure"} 0.000151417
node_scrape_collector_duration_seconds{collector="rapl"} 0.000129291
node_scrape_collector_duration_seconds{collector="schedstat"} 0.000127292
node_scrape_collector_duration_seconds{collector="selinux"} 8.25e-06
node_scrape_collector_duration_seconds{collector="sockstat"} 0.000582292
node_scrape_collector_duration_seconds{collector="softnet"} 0.000299375
node_scrape_collector_duration_seconds{collector="stat"} 0.034940792
node_scrape_collector_duration_seconds{collector="tapestats"} 4.925e-05
node_scrape_collector_duration_seconds{collector="textfile"} 9.1708e-05
node_scrape_collector_duration_seconds{collector="thermal_zone"} 0.001977084
node_scrape_collector_duration_seconds{collector="time"} 0.000390875
node_scrape_collector_duration_seconds{collector="timex"} 8.8833e-05
node_scrape_collector_duration_seconds{collector="udp_queues"} 0.004909
node_scrape_collector_duration_seconds{collector="uname"} 5.0958e-05
node_scrape_collector_duration_seconds{collector="vmstat"} 0.000610041
node_scrape_collector_duration_seconds{collector="watchdog"} 0.0771575
node_scrape_collector_duration_seconds{collector="xfs"} 4.9792e-05
node_scrape_collector_duration_seconds{collector="zfs"} 5.2625e-05
# HELP node_scrape_collector_success node_exporter: Whether a collector succeeded.
# TYPE node_scrape_collector_success gauge
node_scrape_collector_success{collector="arp"} 1
node_scrape_collector_success{collector="bcache"} 1
node_scrape_collector_success{collector="bonding"} 1
node_scrape_collector_success{collector="btrfs"} 1
node_scrape_collector_success{collector="conntrack"} 1
node_scrape_collector_success{collector="cpu"} 1
node_scrape_collector_success{collector="cpufreq"} 1
node_scrape_collector_success{collector="diskstats"} 1
node_scrape_collector_success{collector="dmi"} 0
node_scrape_collector_success{collector="edac"} 1
node_scrape_collector_success{collector="entropy"} 1
node_scrape_collector_success{collector="fibrechannel"} 0
node_scrape_collector_success{collector="filefd"} 1
node_scrape_collector_success{collector="filesystem"} 1
node_scrape_collector_success{collector="hwmon"} 1
node_scrape_collector_success{collector="infiniband"} 0
node_scrape_collector_success{collector="ipvs"} 0
node_scrape_collector_success{collector="loadavg"} 1
node_scrape_collector_success{collector="mdadm"} 0
node_scrape_collector_success{collector="meminfo"} 1
node_scrape_collector_success{collector="netclass"} 1
node_scrape_collector_success{collector="netdev"} 1
node_scrape_collector_success{collector="netstat"} 1
node_scrape_collector_success{collector="nfs"} 0
node_scrape_collector_success{collector="nfsd"} 0
node_scrape_collector_success{collector="nvme"} 0
node_scrape_collector_success{collector="os"} 1
node_scrape_collector_success{collector="powersupplyclass"} 1
node_scrape_collector_success{collector="pressure"} 0
node_scrape_collector_success{collector="rapl"} 0
node_scrape_collector_success{collector="schedstat"} 0
node_scrape_collector_success{collector="selinux"} 1
node_scrape_collector_success{collector="sockstat"} 1
node_scrape_collector_success{collector="softnet"} 1
node_scrape_collector_success{collector="stat"} 1
node_scrape_collector_success{collector="tapestats"} 0
node_scrape_collector_success{collector="textfile"} 1
node_scrape_collector_success{collector="thermal_zone"} 1
node_scrape_collector_success{collector="time"} 1
node_scrape_collector_success{collector="timex"} 1
node_scrape_collector_success{collector="udp_queues"} 1
node_scrape_collector_success{collector="uname"} 1
node_scrape_collector_success{collector="vmstat"} 1
node_scrape_collector_success{collector="watchdog"} 1
node_scrape_collector_success{collector="xfs"} 1
node_scrape_collector_success{collector="zfs"} 0
# HELP node_selinux_enabled SELinux is enabled, 1 is true, 0 is false
# TYPE node_selinux_enabled gauge
node_selinux_enabled 0
# HELP node_sockstat_FRAG6_inuse Number of FRAG6 sockets in state inuse.
# TYPE node_sockstat_FRAG6_inuse gauge
node_sockstat_FRAG6_inuse 0
# HELP node_sockstat_FRAG6_memory Number of FRAG6 sockets in state memory.
# TYPE node_sockstat_FRAG6_memory gauge
node_sockstat_FRAG6_memory 0
# HELP node_sockstat_FRAG_inuse Number of FRAG sockets in state inuse.
# TYPE node_sockstat_FRAG_inuse gauge
node_sockstat_FRAG_inuse 0
# HELP node_sockstat_FRAG_memory Number of FRAG sockets in state memory.
# TYPE node_sockstat_FRAG_memory gauge
node_sockstat_FRAG_memory 0
# HELP node_sockstat_RAW6_inuse Number of RAW6 sockets in state inuse.
# TYPE node_sockstat_RAW6_inuse gauge
node_sockstat_RAW6_inuse 0
# HELP node_sockstat_RAW_inuse Number of RAW sockets in state inuse.
# TYPE node_sockstat_RAW_inuse gauge
node_sockstat_RAW_inuse 0
# HELP node_sockstat_TCP6_inuse Number of TCP6 sockets in state inuse.
# TYPE node_sockstat_TCP6_inuse gauge
node_sockstat_TCP6_inuse 53
# HELP node_sockstat_TCP_alloc Number of TCP sockets in state alloc.
# TYPE node_sockstat_TCP_alloc gauge
node_sockstat_TCP_alloc 132
# HELP node_sockstat_TCP_inuse Number of TCP sockets in state inuse.
# TYPE node_sockstat_TCP_inuse gauge
node_sockstat_TCP_inuse 70
# HELP node_sockstat_TCP_mem Number of TCP sockets in state mem.
# TYPE node_sockstat_TCP_mem gauge
node_sockstat_TCP_mem 9
# HELP node_sockstat_TCP_mem_bytes Number of TCP sockets in state mem_bytes.
# TYPE node_sockstat_TCP_mem_bytes gauge
node_sockstat_TCP_mem_bytes 36864
# HELP node_sockstat_TCP_orphan Number of TCP sockets in state orphan.
# TYPE node_sockstat_TCP_orphan gauge
node_sockstat_TCP_orphan 0
# HELP node_sockstat_TCP_tw Number of TCP sockets in state tw.
# TYPE node_sockstat_TCP_tw gauge
node_sockstat_TCP_tw 167
# HELP node_sockstat_UDP6_inuse Number of UDP6 sockets in state inuse.
# TYPE node_sockstat_UDP6_inuse gauge
node_sockstat_UDP6_inuse 100
# HELP node_sockstat_UDPLITE6_inuse Number of UDPLITE6 sockets in state inuse.
# TYPE node_sockstat_UDPLITE6_inuse gauge
node_sockstat_UDPLITE6_inuse 0
# HELP node_sockstat_UDPLITE_inuse Number of UDPLITE sockets in state inuse.
# TYPE node_sockstat_UDPLITE_inuse gauge
node_sockstat_UDPLITE_inuse 0
# HELP node_sockstat_UDP_inuse Number of UDP sockets in state inuse.
# TYPE node_sockstat_UDP_inuse gauge
node_sockstat_UDP_inuse 112
# HELP node_sockstat_UDP_mem Number of UDP sockets in state mem.
# TYPE node_sockstat_UDP_mem gauge
node_sockstat_UDP_mem 95
# HELP node_sockstat_UDP_mem_bytes Number of UDP sockets in state mem_bytes.
# TYPE node_sockstat_UDP_mem_bytes gauge
node_sockstat_UDP_mem_bytes 389120
# HELP node_sockstat_sockets_used Number of IPv4 sockets in use.
# TYPE node_sockstat_sockets_used gauge
node_sockstat_sockets_used 630
# HELP node_softnet_backlog_len Softnet backlog status
# TYPE node_softnet_backlog_len gauge
node_softnet_backlog_len{cpu="0"} 0
node_softnet_backlog_len{cpu="1"} 0
node_softnet_backlog_len{cpu="2"} 0
node_softnet_backlog_len{cpu="3"} 0
# HELP node_softnet_cpu_collision_total Number of collision occur while obtaining device lock while transmitting
# TYPE node_softnet_cpu_collision_total counter
node_softnet_cpu_collision_total{cpu="0"} 0
node_softnet_cpu_collision_total{cpu="1"} 0
node_softnet_cpu_collision_total{cpu="2"} 0
node_softnet_cpu_collision_total{cpu="3"} 0
# HELP node_softnet_dropped_total Number of dropped packets
# TYPE node_softnet_dropped_total counter
node_softnet_dropped_total{cpu="0"} 0
node_softnet_dropped_total{cpu="1"} 24
node_softnet_dropped_total{cpu="2"} 0
node_softnet_dropped_total{cpu="3"} 0
# HELP node_softnet_flow_limit_count_total Number of times flow limit has been reached
# TYPE node_softnet_flow_limit_count_total counter
node_softnet_flow_limit_count_total{cpu="0"} 0
node_softnet_flow_limit_count_total{cpu="1"} 0
node_softnet_flow_limit_count_total{cpu="2"} 0
node_softnet_flow_limit_count_total{cpu="3"} 0
# HELP node_softnet_processed_total Number of processed packets
# TYPE node_softnet_processed_total counter
node_softnet_processed_total{cpu="0"} 1.4415985e+07
node_softnet_processed_total{cpu="1"} 1.3231052e+07
node_softnet_processed_total{cpu="2"} 9.857262e+06
node_softnet_processed_total{cpu="3"} 110194
# HELP node_softnet_received_rps_total Number of times cpu woken up received_rps
# TYPE node_softnet_received_rps_total counter
node_softnet_received_rps_total{cpu="0"} 0
node_softnet_received_rps_total{cpu="1"} 0
node_softnet_received_rps_total{cpu="2"} 0
node_softnet_received_rps_total{cpu="3"} 0
# HELP node_softnet_times_squeezed_total Number of times processing packets ran out of quota
# TYPE node_softnet_times_squeezed_total counter
node_softnet_times_squeezed_total{cpu="0"} 2
node_softnet_times_squeezed_total{cpu="1"} 1
node_softnet_times_squeezed_total{cpu="2"} 0
node_softnet_times_squeezed_total{cpu="3"} 0
# HELP node_textfile_scrape_error 1 if there was an error opening or reading a file, 0 otherwise
# TYPE node_textfile_scrape_error gauge
node_textfile_scrape_error 0
# HELP node_thermal_zone_temp Zone temperature in Celsius
# TYPE node_thermal_zone_temp gauge
node_thermal_zone_temp{type="tsens_tz_sensor11",zone="0"} 68.8
node_thermal_zone_temp{type="tsens_tz_sensor12",zone="1"} 69.1
node_thermal_zone_temp{type="tsens_tz_sensor13",zone="2"} 69.8
node_thermal_zone_temp{type="tsens_tz_sensor14",zone="3"} 70.8
node_thermal_zone_temp{type="tsens_tz_sensor15",zone="4"} 69.1
# HELP node_time_clocksource_available_info Available clocksources read from '/sys/devices/system/clocksource'.
# TYPE node_time_clocksource_available_info gauge
node_time_clocksource_available_info{clocksource="arch_sys_counter",device="0"} 1
# HELP node_time_clocksource_current_info Current clocksource read from '/sys/devices/system/clocksource'.
# TYPE node_time_clocksource_current_info gauge
node_time_clocksource_current_info{clocksource="arch_sys_counter",device="0"} 1
# HELP node_time_seconds System time in seconds since epoch (1970).
# TYPE node_time_seconds gauge
node_time_seconds 1.7235370684318807e+09
# HELP node_time_zone_offset_seconds System time zone offset in seconds.
# TYPE node_time_zone_offset_seconds gauge
node_time_zone_offset_seconds{time_zone="CST"} 28800
# HELP node_timex_estimated_error_seconds Estimated error in seconds.
# TYPE node_timex_estimated_error_seconds gauge
node_timex_estimated_error_seconds 16
# HELP node_timex_frequency_adjustment_ratio Local clock frequency adjustment.
# TYPE node_timex_frequency_adjustment_ratio gauge
node_timex_frequency_adjustment_ratio 1
# HELP node_timex_loop_time_constant Phase-locked loop time constant.
# TYPE node_timex_loop_time_constant gauge
node_timex_loop_time_constant 2
# HELP node_timex_maxerror_seconds Maximum error in seconds.
# TYPE node_timex_maxerror_seconds gauge
node_timex_maxerror_seconds 16
# HELP node_timex_offset_seconds Time offset in between local system and reference clock.
# TYPE node_timex_offset_seconds gauge
node_timex_offset_seconds 0
# HELP node_timex_pps_calibration_total Pulse per second count of calibration intervals.
# TYPE node_timex_pps_calibration_total counter
node_timex_pps_calibration_total 0
# HELP node_timex_pps_error_total Pulse per second count of calibration errors.
# TYPE node_timex_pps_error_total counter
node_timex_pps_error_total 0
# HELP node_timex_pps_frequency_hertz Pulse per second frequency.
# TYPE node_timex_pps_frequency_hertz gauge
node_timex_pps_frequency_hertz 0
# HELP node_timex_pps_jitter_seconds Pulse per second jitter.
# TYPE node_timex_pps_jitter_seconds gauge
node_timex_pps_jitter_seconds 0
# HELP node_timex_pps_jitter_total Pulse per second count of jitter limit exceeded events.
# TYPE node_timex_pps_jitter_total counter
node_timex_pps_jitter_total 0
# HELP node_timex_pps_shift_seconds Pulse per second interval duration.
# TYPE node_timex_pps_shift_seconds gauge
node_timex_pps_shift_seconds 0
# HELP node_timex_pps_stability_exceeded_total Pulse per second count of stability limit exceeded events.
# TYPE node_timex_pps_stability_exceeded_total counter
node_timex_pps_stability_exceeded_total 0
# HELP node_timex_pps_stability_hertz Pulse per second stability, average of recent frequency changes.
# TYPE node_timex_pps_stability_hertz gauge
node_timex_pps_stability_hertz 0
# HELP node_timex_status Value of the status array bits.
# TYPE node_timex_status gauge
node_timex_status 64
# HELP node_timex_sync_status Is clock synchronized to a reliable server (1 = yes, 0 = no).
# TYPE node_timex_sync_status gauge
node_timex_sync_status 0
# HELP node_timex_tai_offset_seconds International Atomic Time (TAI) offset.
# TYPE node_timex_tai_offset_seconds gauge
node_timex_tai_offset_seconds 0
# HELP node_timex_tick_seconds Seconds between clock ticks.
# TYPE node_timex_tick_seconds gauge
node_timex_tick_seconds 0.01
# HELP node_udp_queues Number of allocated memory in the kernel for UDP datagrams in bytes.
# TYPE node_udp_queues gauge
node_udp_queues{ip="v4",queue="rx"} 0
node_udp_queues{ip="v4",queue="tx"} 0
node_udp_queues{ip="v6",queue="rx"} 0
node_udp_queues{ip="v6",queue="tx"} 0
# HELP node_uname_info Labeled system information as provided by the uname system call.
# TYPE node_uname_info gauge
node_uname_info{domainname="(none)",machine="aarch64",nodename="XiaoQiang",release="5.4.213",sysname="Linux",version="#0 SMP PREEMPT Mon Mar 11 03:38:30 2024"} 1
# HELP node_vmstat_oom_kill /proc/vmstat information field oom_kill.
# TYPE node_vmstat_oom_kill untyped
node_vmstat_oom_kill 0
# HELP node_vmstat_pgfault /proc/vmstat information field pgfault.
# TYPE node_vmstat_pgfault untyped
node_vmstat_pgfault 6.0284446e+07
# HELP node_vmstat_pgmajfault /proc/vmstat information field pgmajfault.
# TYPE node_vmstat_pgmajfault untyped
node_vmstat_pgmajfault 1887
# HELP node_vmstat_pgpgin /proc/vmstat information field pgpgin.
# TYPE node_vmstat_pgpgin untyped
node_vmstat_pgpgin 143035
# HELP node_vmstat_pgpgout /proc/vmstat information field pgpgout.
# TYPE node_vmstat_pgpgout untyped
node_vmstat_pgpgout 101480
# HELP node_vmstat_pswpin /proc/vmstat information field pswpin.
# TYPE node_vmstat_pswpin untyped
node_vmstat_pswpin 0
# HELP node_vmstat_pswpout /proc/vmstat information field pswpout.
# TYPE node_vmstat_pswpout untyped
node_vmstat_pswpout 0
# HELP node_watchdog_info Info of /sys/class/watchdog/<watchdog>
# TYPE node_watchdog_info gauge
node_watchdog_info{identity="",name="watchdog0",options="",pretimeout_governor="",state="",status=""} 1
# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 266.11
# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 4096
# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 10
# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 2.1864448e+07
# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1.72352025198e+09
# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 1.270853632e+09
# HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
# TYPE process_virtual_memory_max_bytes gauge
process_virtual_memory_max_bytes 1.8446744073709552e+19
# HELP promhttp_metric_handler_errors_total Total number of internal errors encountered by the promhttp metric handler.
# TYPE promhttp_metric_handler_errors_total counter
promhttp_metric_handler_errors_total{cause="encoding"} 0
promhttp_metric_handler_errors_total{cause="gathering"} 0
# HELP promhttp_metric_handler_requests_in_flight Current number of scrapes being served.
# TYPE promhttp_metric_handler_requests_in_flight gauge
promhttp_metric_handler_requests_in_flight 1
# HELP promhttp_metric_handler_requests_total Total number of scrapes by HTTP status code.
# TYPE promhttp_metric_handler_requests_total counter
promhttp_metric_handler_requests_total{code="200"} 1113
promhttp_metric_handler_requests_total{code="500"} 0
promhttp_metric_handler_requests_total{code="503"} 0
`;
